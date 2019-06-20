export const signup = (user) => {
    return $.ajax({
        method: 'post',
<<<<<<< HEAD
        url: '/api/user',
=======
        url: 'api/user',
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
        data: { user }
    })
}

export const login = (user) => {
    return $.ajax({
        method: 'post',
<<<<<<< HEAD
        url: '/api/session',
=======
        url: 'api/session',
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'delete',
<<<<<<< HEAD
        url: '/api/session'
=======
        url: 'api/session'
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
    })
}