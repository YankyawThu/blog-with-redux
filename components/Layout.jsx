export default function CustomLayout({ children }) {
  return (
    <main className="cus-layout flex flex-col items-center">
        <div className='sm:w-96 w-full pt-16 pb-20 min-h-screen'>
            {children}
        </div>
    </main>
  )
}
