import {NextResponse} from "next/server";
import {TokenTypes} from "../../../utils/auth";

export async function GET(req, res) {
    const code = new URL(req.url).searchParams.get("code")


    const locale = req.cookies.get('i18next').value;

    const googleId = process.env.GOOGLE_ID
    const googleSecret = process.env.GOOGLE_SECRET
    const redirectURL = process.env.GOOGLE_REDIRECT_URL

    const tokenResponse = await fetch(`https://oauth2.googleapis.com/token?client_id=${googleId}&client_secret=${googleSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectURL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })

    let body = await tokenResponse.json();
    let token = body.access_token;

    const redirect = NextResponse.redirect(new URL(`/${locale}/admin`, req.url));
    redirect.cookies.set('token', token)
    redirect.cookies.set('token_type', TokenTypes.GOOGLE)
    return redirect;
}