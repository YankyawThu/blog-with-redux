'use client'

import Nav from '@components/Nav.jsx'
import Footer from '@components/Footer.jsx'
import Filter from '@components/Filter.jsx'
import Blog from '@components/Blog.jsx'
import CustomLayout from '@components/Layout.jsx'
import {useEffect, useState} from 'react'
import { useGetBlogsQuery } from '@api/blogSlice'
import { useSelector } from 'react-redux'
import { selectAllBlogs } from '@api/blogReducer'

function Blogs() {
    const {
        data: blogs = [],
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetBlogsQuery() // use from blog slice

    // const blogs = useSelector(state => state.blogs) // use from blog reducer

    async function searchBlog(e) {
        let keyword = e.target.value
        // blogs = blogs.filter(blog => blog.title == keyword)
    }

    function Lists() {
        let lists = blogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
        ))
        return (
            <div className="mt-7 px-5">
                {lists}
            </div>
        )
    }

    return (
        <>
            <CustomLayout>
                <Nav />
                <div className="text-2xl font-bold px-5 pt-2">Blogs</div>
                <Filter search={searchBlog} />
                <Lists />
                <Footer refresh={refetch}/>
            </CustomLayout>
        </>
    )
}

export default Blogs