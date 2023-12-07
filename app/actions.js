import { cookies } from 'next/headers'

function createCookieTheme () {

}
export async function create() {
    const theme = await createCookieTheme()
    cookies().set('theme', cart.id)
}