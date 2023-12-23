export async function isAuthorized(token, tokenType, response) {
  if (tokenType === TokenTypes.GITHUB) {
    const userResponse = await fetch(`https://api.github.com/user`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    if (userResponse.status === 200) {
      let user = await userResponse.json()
      let email = user.email

      if (email !== null && email !== ''){
        response.cookies.set('email', email)
        return true;
      }
      return false;
    }
  }

  if (tokenType === TokenTypes.GOOGLE) {
    const userResponse = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    if (userResponse.status === 200) {
      let user = await userResponse.json()
      let email = user.email

      if (email !== null && email !== ''){
        response.cookies.set('email', email)
        return true;
      }
      return false;
    }
  }

  if (tokenType = TokenTypes.REGISTER){

  }

  return false
}

export class TokenTypes{
  static GITHUB = 'github'
  static GOOGLE = 'google'
  static REGISTER = 'register'
}