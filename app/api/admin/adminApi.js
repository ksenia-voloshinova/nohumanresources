export async function getDataUser() {
    const res = await  fetch('https://dummyjson.com/users/1')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getListDeposits() {
    const res = await  fetch('https://dummyjson.com/users/1')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function changePassword({NewPassword}) {
    fetch('https://dummyjson.com/users/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            password: NewPassword
        })
    })
        .then(res => res.json())
        .then(console.log);
}

export async function login({username, password}) {
    if (process.env.ENV_TYPE === 'local'){
        username = 'hbingley1';
        password = 'CQutx25i8r'
    }
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    return await res.json();
}


export async function register({username, password}) {
    if (process.env.ENV_TYPE === 'local'){
        username = 'hbingley1';
        password = 'CQutx25i8r'
    }

    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    return await res.json();
}