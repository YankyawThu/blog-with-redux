'use client'

import Nav from '@components/Nav.jsx'
import Footer from '@components/Footer.jsx'
import Filter from '@components/Filter.jsx'
import Blog from '@components/Blog.jsx'
import CustomLayout from '@components/Layout.jsx'
import {useEffect, useState} from 'react'

function Blogs() {
    const [data, setData] = useState([])

    useEffect(() => {
        FetchBlogs()
    }, [])

    async function FetchBlogs() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
        if(response.ok) {
            const res = await response.json()
            setData(res)
        }
    }

    async function searchBlog(e) {
        let keyword = e.target.value
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?keyword=${keyword}`)
        if(response.ok) {
            let res = await response.json()
            setData(res)
        }
    }

    function Lists() {
        let lists = data.map(blog => (
            <Blog key={blog.id} blog={blog} />
        ))
        return (
            <div className="mt-7 px-5">
                {lists}
            </div>
        )
    }

    function refresh() {
        FetchBlogs()
    }

    return (
        <>
            <CustomLayout>
                <Nav />
                <div className="text-2xl font-bold px-5 pt-2">Blogs</div>
                <Filter search={searchBlog} />
                <Lists />
                <Footer refresh={refresh}/>
            </CustomLayout>
        </>
    )
}

export default Blogs