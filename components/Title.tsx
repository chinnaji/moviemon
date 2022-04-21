import React from 'react'
import Link from 'next/link'
import { title } from '../ts/types'

function Title({ title, id }: title) {
  return (
    <>
      {' '}
      <p className="-mb-2 text-lime">#latest #new😎</p>
      <Link passHref href={`/movie/${id} `}>
        <h1 className="mt-5 cursor-pointer text-5xl font-bold hover:text-lime">
          {title}
        </h1>
      </Link>
    </>
  )
}

export default Title
