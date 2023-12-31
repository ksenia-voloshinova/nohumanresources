import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'
import {isAuthorized} from "./app/utils/auth";

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export async function middleware(req, res){
  const token = req.cookies.get('token')?.value ?? '';
  const tokenType = req.cookies.get('token_type')?.value ?? '';

  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (req.nextUrl.pathname.endsWith('/admin')) {
    const response = NextResponse.next();
    const authorized = await isAuthorized(token, tokenType);
    if (authorized) {
      return req.url.includes(lng)
          ? response
          : NextResponse.redirect(new URL(`${lng}/admin`, req.url))
    }
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  if (req.nextUrl.pathname.endsWith('/auth') || req.nextUrl.pathname.endsWith('/register')) {
    let redirectURL = req.url.includes(lng) ? '/admin' : `${lng}/admin`
    const response = NextResponse.redirect(new URL(redirectURL, req.url));
    const authorized = await isAuthorized(token, tokenType);
    if (authorized) {
      return response
    }
  }

  if (
      !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
