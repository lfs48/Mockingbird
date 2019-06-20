export const createSecret = (secret)=>{
    
    return $.ajax({
        method: 'post',
        url: `api/secrets/`,
        data: {secret}
    })
}