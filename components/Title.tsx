import React from 'react'
import Link from 'next/link'
import { title } from '../ts/types'

function Title({ title, id, size }: title) {
  return (
    <>
      {' '}
      <Link passHref href={`/movie/${id} `}>
        <a>
          <h1
            className={`mt-5 cursor-pointer font-bold hover:text-lime ${size}`}
          >
            {title}
          </h1>
        </a>
      </Link>
    </>
  )
}

export default Title
