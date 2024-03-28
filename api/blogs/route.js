export const GET = async(request) => {
    const response = await fetch('http://127.0.0.1:8000/api/blogs')
    const res = await response.json()
    return new Response(res)
}