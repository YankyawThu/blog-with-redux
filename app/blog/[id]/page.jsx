'use client'

import Image from 'next/image'
import { HiMiniArrowLongLeft } from 'react-icons/hi2'
import { MdOutlineBookmarkAdded } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { PiCopySimple } from 'react-icons/pi'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Alert from '@components/Alert'

function Detail({params}) {
    const [blog, setBlog] = useState({})
    const [like, setLike] = useState(false)
    const [alertInfo, setAlertInfo] = useState({
        on: false,
        msg: ''
    })

    useEffect(() => {
        FetchBlog()
    }, [])

    async function FetchBlog() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${params.id}`)
        if(response.ok) {
            const res = await response.json()
            setBlog(res)
        }
    }

    function Copy() {
        navigator.clipboard.writeText(location.href);
        PlayAlert('Link Copied')
    }

    async function GiveLike() {
        if(!like) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${params.id}/like`)
            if(response.ok) {
                setBlog({...blog, likes: blog.likes+1})
                PlayAlert('You liked it')
                setLike(true)
            }
        }
    }

    function PlayAlert(msg) {
        setAlertInfo({
            on: true,
            msg: msg
        })
        setTimeout(() => setAlertInfo({
            on: false,
            msg: ''
        }), 2000)
    }

    return (
        <>
            <div className="relative">
                <div key={blog.id} className="px-5">
                    <div className="flex justify-between">
                        <Link href="/blog" className="py-3">
                            <HiMiniArrowLongLeft className="inline-block w-10 h-10" />
                        </Link>
                        <div className="relative py-3 pl-3 self-center cursor-pointer" onClick={Copy}>
                            <PiCopySimple className="icon-lg text-gray-500" />
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={blog.image} alt="image" width={100} height={100} quality={100} priority={true} className="w-full h-52 object-cover rounded-2xl" />
                        <div className="icon-bg inline-block absolute bg-gray-100 rounded-full p-2 right-10 -bottom-4">
                            <MdOutlineBookmarkAdded className="icon icon-dark" />
                        </div>
                    </div>
                    <div className="flex justify-between pt-8 pb-5 items-center">
                        <div>
                            <span className="text-gray-400 mr-1">By</span>
                            {blog.author}
                        </div>
                        <div className="flex flex-row">
                            <div className="inline-flex mr-3 cursor-pointer" onClick={GiveLike}>
                                <span className="mr-1">{blog.likes}</span>
                                {like ? <AiFillHeart className="icon self-center text-red-400" /> : <AiOutlineHeart className="icon self-center text-red-400" />}
                            </div>
                            <div className="inline-flex">
                                <span className="mr-1">{blog.views}</span>
                                <AiOutlineEye className="icon-lg self-center text-green-400" />
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold">
                        {blog.title}
                    </div>
                    <div className="py-5 text-gray-500 leading-loose">
                        <pre className="break-words">
                            {blog.content}
                        </pre>
                    </div>
                </div>
                {alertInfo.on && <Alert info={alertInfo} />}
            </div>
        </>
    )
}

export default Detail