
export const userInfo = async() =>{
    try {
        const myData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await myData.json();

    console.log(data, "data")
    return { posts: data };

    } catch (error) {
        throw new Error(error)
    }
}