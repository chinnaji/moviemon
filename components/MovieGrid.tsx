import React from 'react'
import img from '../images/img.png'
import Image from 'next/image'
import Link from 'next/link'

type MovieGridProps = {
  isReverse: boolean
  movies: {}[]
  type: string
}

function MovieGrid({ isReverse, movies, type }: MovieGridProps) {
  const a = [1, 2, 3, 4, 5]
  return (
    <section className="mx-auto max-w-[1200px] py-10">
      {/* title && see more */}
      <div className="flex items-center justify-between">
        <h2 className="mb-7 ml-2 w-fit border-b text-2xl font-semibold text-zinc-100">
          Trending Movies
        </h2>

        <Link href={`/${type}`}>See more</Link>
      </div>
      <div className="flex flex-wrap">
        {/* movie 1 width===75% */}
        <span className="block w-full p-2 lg:w-[70%]">
          <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
            {/* content */}
            <Image
              src={img}
              className="z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </span>
        {/*  */}
        {/* movie 2 width===30% */}
        <span className="w-full rounded p-2 md:w-[30%]">
          <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
            {/* content */}
            <Image
              src={img}
              className="z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </span>
        {/*  */}
        {/* movie 2 width===30% */}
        <span className="w-full rounded p-2 md:w-[33.3%]">
          <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
            {/* content */}
            <Image
              src={img}
              className="z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </span>
        {/*  */}
        {/* movie 2 width===30% */}
        <span className="w-full rounded p-2 md:w-[33.3%]">
          <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
            {/* content */}
            <Image
              src={img}
              className="z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </span>
        {/*  */}
        {/* movie 2 width===30% */}
        <span className="w-full rounded p-2 md:w-[33.3%]">
          <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
            {/* content */}
            <Image
              src={img}
              className="z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </span>
        {/*  */}
      </div>
    </section>
  )
}

export default MovieGrid
