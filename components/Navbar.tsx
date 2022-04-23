import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
// import Search from "./Search";
import logo from '../images/logo.svg'

function Navbar() {
  const [isSearch, setIsSearch] = useState(false)
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Movies',
      path: '/movies/1',
    },
    {
      title: 'Tv Series',
      path: '/tv-series/1',
    },
    {
      title: 'People',
      path: '/people/1',
    },
    // {
    //   title: "Contact",
    //   path: "/#contact",
    // },
  ]

  const [isSidebar, setIsSidebar] = useState(false)
  // const [matches, setMatches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // );

  // useEffect(() => {
  //   window
  //     .matchMedia("(min-width: 768px)")
  //     .addEventListener("change", (e) => setMatches(e.matches));
  //   if (isSidebar && !matches) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // });
  return (
    <>
      <header className="bg-dark sticky top-0 z-50 max-h-28 w-full overflow-hidden border-b border-b-zinc-800 bg-black py-3">
        {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-3">
          <Link passHref href="/">
            {/* <a className="w-48 h-9 md:h-12 relative cursor-pointer block md:-ml-0 -ml-5">
              <Image
                src={logo}
                layout="fill"
                alt="shodex garden logo"
                priority
                loading="eager"
              />
            </a> */}
            <a>
              <h1 className="cursor-pointer text-xl font-bold text-lime">
                MOVIEMON
              </h1>
            </a>
          </Link>

          <div className="flex">
            <div
              className={`${
                isSidebar ? 'block' : 'hidden'
              } bg-dark fixed inset-0 h-screen  duration-500  ease-in-out lg:relative
          lg:block lg:h-full`}
            >
              {/* <div className="relativ"> */}
              <MdOutlineClose
                className="bg-accent2 absolute right-10 top-10 cursor-pointer rounded text-3xl text-zinc-400 lg:hidden"
                onClick={() => setIsSidebar(false)}
              />
              {/* </div> */}

              <ul className="ml-auto -mt-10 flex h-full flex-col items-center justify-center bg-black text-zinc-100 md:-mt-0 lg:flex-row">
                {navLinks.map((navLink) => (
                  <li
                    className={`my-4 flex flex-col items-center px-4 py-2 text-lg font-medium uppercase hover:text-lime md:text-sm lg:my-1 lg:capitalize`}
                    onClick={() => setIsSidebar(false)}
                    key={navLink.title}
                  >
                    <Link passHref href={navLink.path}>
                      <a>{navLink.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <span
                // onClick={() => setIsSearch(!isSearch)}
                onClick={() => setIsSearch(true)}
              >
                <FiSearch className="mr-2 cursor-pointer text-2xl text-zinc-100 hover:text-lime" />
              </span>

              <FiMenu
                onClick={() => setIsSidebar(true)}
                className="ml-4 mr-1 cursor-pointer text-2xl text-zinc-600 dark:text-zinc-100 lg:hidden"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* {isSearch ? <Search setIsSearch={setIsSearch} /> : null} */}
    </>
  )
}

export default Navbar
