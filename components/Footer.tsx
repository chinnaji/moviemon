import React from 'react'
import {
  // BsTwitter,
  // BsYoutube,
  // BsFillEnvelopeFill,
  BsGithub,
} from 'react-icons/bs'
function Footer() {
  return (
    <footer className="w-full">
      <a
        href="https://github.com/chinnaji"
        className="flex items-center justify-center border-t border-t-zinc-800 py-5 text-center text-sm text-lime"
      >
        <span className="mr-2 text-lg">By @chinnaji </span>
        <BsGithub className="text-2xl" />
      </a>
    </footer>
  )
}

export default Footer
