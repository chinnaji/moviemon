import React from 'react'
import { personType } from '../ts/types'
import Image from 'next/image'
import { FaImdb } from 'react-icons/fa'
type personResType = {
  personDetails: personType
}
function PersonPage({ personDetails }: personResType) {
  return (
    <main className="mx-auto my-10 flex max-w-[1200px] flex-wrap text-zinc-100">
      <section className="h-[70vh] w-full p-2 md:w-[35%]">
        <div className="w-md relative flex h-full snap-center items-center justify-center rounded-3xl shadow">
          {/* content */}
          <Image
            src={`https://image.tmdb.org/t/p/w500${personDetails.profile_path}`}
            className="item_img z-10 rounded-lg"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
        </div>
      </section>
      <section className="w-full py-2 px-5 md:w-[65%]">
        <h1 className="mt-5 text-4xl font-bold text-lime">
          {personDetails.name}
          <span className="mb-10 block text-sm text-zinc-300">
            {personDetails.birthday}
          </span>
        </h1>
        <p className="text-base">
          {' '}
          <b>BIOGRAPHY</b> <br />{' '}
          <span className="text-zinc-400">{personDetails.biography}</span>
        </p>
        <p className="my-7">
          <b> Also Known As -</b>{' '}
          {personDetails.also_known_as.map((aka, index) => (
            <span key={index}>{aka},</span>
          ))}
        </p>
        <p></p>
        <p>
          <a href={`https://www.imdb.com/title/${personDetails.imdb_id}`}>
            <FaImdb className="text-5xl text-lime" />
          </a>{' '}
        </p>
      </section>
    </main>
  )
}

export default PersonPage
