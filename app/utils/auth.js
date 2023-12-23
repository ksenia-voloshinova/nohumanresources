
export async function isAuthorized(token, tokenType) {
  if (tokenType === TokenTypes.GITHUB) {
    const userResponse = await fetch(`https://api.github.com/user`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    if (userResponse.status === 200){
      return true
    }
  }

  return false
}

export class TokenTypes{
  static GITHUB = 'github'
}