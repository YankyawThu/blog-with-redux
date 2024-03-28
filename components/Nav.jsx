import Image from 'next/image'
import { FaBarsStaggered } from 'react-icons/fa6'

function Nav() {
    return (
        <>
            <div className="nav flex justify-between fixed py-3 px-5 top-0 sm:w-96 w-full z-10 bg-white">
                <FaBarsStaggered className='icon-lg self-center' />
                <div>
                    <Image src="/assets/images/avatar.jpg" alt="image" width={45} height={45} className='w-10 h-10 rounded-full' />
                </div>
            </div>
        </>
    )
}

export default Nav