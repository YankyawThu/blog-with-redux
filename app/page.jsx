import Link from 'next/link'

function GetStarted() {
  return (
    <>
      <div className="home-bg sm:w-96 h-screen flex flex-col items-center justify-center">
        <div className="px-10 text-[#040404] -mt-64">
          <div className="text-2xl mb-3 font-semibold">Welcome!</div>
          <div className="">I'm Dr. Lynn Yadanar Aung and <span className="text-xl font-semibold">Thanks</span> for visiting to my <span className="text-[#FF3C38] font-bold">Blog</span>.</div>
        </div>
        <Link href="blog" className="start-btn inline-flex text-white rounded-full bg-[#FF3C38] px-5 py-3 mt-10"> 
          Get Started
        </Link>
      </div>
    </>
  )
}

export default GetStarted
