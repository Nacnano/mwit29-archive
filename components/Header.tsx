import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  return (
    <div className="sticky flex-none top-0 py-2 bg-white rounded-b-lg shadow w-full z-40 left-0 border-b">
      <div className="max-w-8xl mx-auto text-gray-800 ">
        <div className="py-2 mx-4">
          <div className="relative flex items-center">
            <Link href="/" className="flex items-center w-100">
              <Image
                src="/student/07967.jpg"
                className="mr-3 my-1 self-center"
                width="100"
                height="100"
                alt="mwit29-archive-logo"
              ></Image>
              <span className="self-center text-xl sm:whitespace-nowrap">MWIT 29 Archive</span>
            </Link>

            <div className="relative flex ml-auto items-center w-auto">
              <nav className="leading-6">
                <ul className="flex space-x-5">
                  <li>
                    <a href="rooms" className="block rounded hover:text-blue-700">
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="students" className="block rounded hover:text-blue-700">
                      Students
                    </a>
                  </li>
                  <li>
                    <a href="gallery" className="block rounded hover:text-blue-700">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="statistics" className="block rounded hover:text-blue-700">
                      Statistics
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex border-l border-slate-200 ml-6 pl-6 items-center">
                {session && session.user ? (
                  <button
                    onClick={() => signOut()}
                    className="text-gray-500 text-center hover:text-blue-400 focus:outline-none rounded-lg px-5 py-2.5 mr-3"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="text-white  text-center bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg px-5 py-2.5 mr-3"
                  >
                    Sign in
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
