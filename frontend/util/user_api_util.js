export const fetchAllUsers = ()=>{
    return $.ajax({
        method: 'get',
        api: 'api/user'
    })
}