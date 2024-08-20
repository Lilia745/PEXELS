
async function myFetch(url,method) {
    try{
        const response = await fetch(url,{method})
        return await response.json()
    } catch (error){
        return console.error("Error",error);
    }
}
export default myFetch