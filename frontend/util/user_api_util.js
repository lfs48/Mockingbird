export const fetchAllUsers = ()=>{
    debugger
    return $.ajax({
        method: 'get',
        api: 'api/user'
    })
}