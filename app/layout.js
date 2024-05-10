'use client'

// import { Inter } from 'next/font/google'
import '@styles/globals.css'
import { Provider } from 'react-redux'
import store from './store'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Lynn',
//   description: 'Lynn\'s personal blog',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="color-scheme" content="dark light" />
      </head>
      <body>
        <main className="layout flex flex-col items-center bg-gray-100">
          <div className='sm:w-96 w-full min-h-screen main bg-white'>
            <Provider store={store}>
              {children}
            </Provider>
          </div>
        </main>
      </body>
    </html>
  )
}
