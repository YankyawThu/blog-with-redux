import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

function Blog({blog}) {
    return (
        <>
            <div className="flex flex-row my-5 w-full">
                <Link href={'blog/'+blog.id} className="relative flex-none w-40">
                    <Image src={blog.image} alt="image" width={180} height={100} className="w-full h-28 object-cover rounded-xl" />
                    <span className="date bg-white absolute rounded-full px-2 py-1 text-gray-400 left-2 top-3 text-xs">{blog.publishedDate}</span>
                </Link>
                <div className="grow self-center ml-5">
                    <div className="text-xs text-gray-400">{blog.duration} Mins Read</div>
                    <p className="pt-1 mb-2 font-semibold line-clamp-2">{blog.title}</p>
                    <div className="flex justify-between w-28">
                        <div className="inline-flex">
                            <span className="text-xs mr-1">{blog.likes}</span>
                            <GiSelfLove className="icon-xs self-center text-red-400" />
                        </div>
                        <div className="inline-flex">
                            <span className="text-xs mr-1">{blog.views}</span>
                            <AiOutlineEye className="icon-sm self-center text-green-400" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog