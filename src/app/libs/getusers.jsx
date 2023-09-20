export default async function GetUser(id){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok){
            throw new Error("failed to fetch error")
        }
    return response.json()
}