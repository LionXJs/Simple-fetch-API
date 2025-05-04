const url_base = "https://jsonplaceholder.typicode.com/posts"

const ambil = async()=>{
    const response = await fetch(url_base)
    const data = await response.json()
    console.log(data)
}

ambil()

