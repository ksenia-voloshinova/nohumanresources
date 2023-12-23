import {NextResponse} from "next/server";
import {TokenTypes} from "../../../utils/auth";

export async function GET (req){
    const url = new URL(req.url)
    const code = url.searchParams.get("code")
    const locale = req.cookies.get('i18next').value;

    const githubId = process.env.GITHUB_ID
    const githubSecret = process.env.GITHUB_SECRET

    const tokenResponse = await fetch(`https://github.com/login/oauth/access_token?code=${code}&client_id=${githubId}&client_secret=${githubSecret}`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    let body = await tokenResponse.formData();
    let token = body.get('access_token');

    const redirect = NextResponse.redirect(new URL(`/${locale}/admin`, req.url));

    redirect.cookies.set('token', token)
    redirect.cookies.set('token_type', TokenTypes.GITHUB)
    return redirect
}