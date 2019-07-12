export const fetchAllUsers = ()=>{
    return $.ajax({
        method: 'get',
        url: 'api/users'
    })
};

export const createUser = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: {user: user}
    })
};