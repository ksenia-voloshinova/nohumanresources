import {NextResponse} from "next/server";
import {TokenTypes} from "../../../utils/auth";

export async function GET (req){
    const url = new URL(req.url)



    // // const code = url.searchParams.get("code")
    // const locale = req.cookies.get('i18next').value;
    //
    // const googleId = process.env.GOOGLE_ID
    // const googleSecret = process.env.GOOGLE_SECRET
    //
    // const tokenResponse = await fetch(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_ID}&redirect_uri=http://localhost:3000/api/auth/gmail&response_type=token&scope=email`,{
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // })
    //     const tokenResponse = await fetch(`https://accounts.google.com/o/oauth2/v2/auth`,{
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    // console.log(tokenResponse)

    // let body = await tokenResponse.formData();
    // let token = body.get('access_token');
    //
    // const redirect = NextResponse.redirect(new URL(`/${locale}/admin`, req.url));
    //
    // redirect.cookies.set('token', token)
    // redirect.cookies.set('token_type', TokenTypes.GITHUB)
    // return redirect
}