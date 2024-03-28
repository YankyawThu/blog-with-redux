import { BiSearch } from 'react-icons/bi';
import { SlEqualizer } from 'react-icons/sl';

function Filter({search}) {
    return (
        <>
            <div className="filter bg-gray-100 rounded-lg flex justify-between items-center px-3 py-1 my-5 mx-5">
                <div className="flex flex-row">
                    <div className='self-center'>
                        <BiSearch className="icon" />
                    </div>
                    <div className="ml-1">
                        <input type="text" onChange={e => search(e)} placeholder="Search Blogs" className="w-64 p-2 filter bg-gray-100 focus:outline-none" />
                    </div>
                </div>
                <div>
                    <div className="filter-icon p-2 rounded bg-white">
                        <SlEqualizer  className="icon-sm" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter