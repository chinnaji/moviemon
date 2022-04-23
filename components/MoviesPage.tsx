import React from 'react'
import { generalTMDBResponse } from '../ts/types'
import Link from 'next/link'
import Title from './Title'
import Like from './Like'
import Image from 'next/image'
import Ratings from './Ratings'
import Date from './Date'
import { useRouter } from 'next/router'
import Pagination from './Pagination'
import MovieCard from './MovieCard'

type dataType = {
  data: generalTMDBResponse[]
}

function dataPage({ data }: dataType) {
  console.log(data)
  return (
    <section className="mx-auto max-w-[1200px]" id="people">
      {/* header */}
      {/* <Pagination /> */}

      <Link href="/data/2">hell</Link>

      <div className="flex flex-wrap">
        {data.map((movie, index) => (
          <span
            key={movie.id}
            className={`movie_card item_block block w-full p-2 md:w-1/2 ${
              index % 5 === 2 ? 'lg:w-1/2' : 'lg:w-1/4'
            }`}
          >
            <div className="relative h-[350px] w-full snap-center rounded-3xl shadow">
              {/* content */}
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="item_img z-10 rounded-lg"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
              <div className="absolute bottom-0 z-20 mt-auto flex h-full w-full flex-col justify-end rounded-lg border border-zinc-900 bg-opacity-75 bg-gradient-to-t from-black p-5 text-white">
                <Title
                  size="md:text-2xl text-xl"
                  id={movie.id}
                  title={movie.title || movie.name || 'N/A'}
                  pathName="tv"
                />
                <div className="flex items-center">
                  <Ratings rate={movie.vote_average} />
                  <Date
                    date={movie.release_date || movie.first_air_date || 'NA'}
                  />
                </div>
                <Like id={movie.id} type="movie" />
              </div>
            </div>
          </span>
        ))}
      </div>
    </section>
  )
}

export default dataPage
