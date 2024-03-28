function Footer({refresh}) {
    return (
        <>
            <div className="footer fixed bottom-0 inline-flex justify-center text-center pt-4 pb-6 sm:w-96 w-full z-10 bg-white">
                <div className="relative p-2 mx-3 cursor-pointer" onClick={refresh}>
                    Latest
                    <div className="w-5 h-1 bottom-0 absolute bg-[#FF3C38] rounded-full mx-auto left-1 right-1"></div>
                </div>
                <div className="relative p-2 mx-3 text-gray-400">
                    Premium
                    <div className="absolute bg-yellow-500 rounded-full px-2 right-0 -top-2 text-[10px] text-black">Pro</div>
                </div>
            </div>
        </>
    )
}

export default Footer