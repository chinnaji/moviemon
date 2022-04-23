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

type similarMoviesRes = {
  similar: generalTMDBResponse[]
}
function SimilarMovies({ similar }: similarMoviesRes) {
  return (
    <main className="mx-auto max-w-[1200px]">
      {/* header */}
      {/* <Pagination /> */}
      <h2 className="mt-10 mb-5 pl-2 text-2xl font-semibold text-zinc-100">
        SIMILAR MOVIES
      </h2>

      <div className="flex flex-wrap">
        {similar.map((movie, index) => (
          <span
            key={movie.id}
            className={`movie_card item_block block w-full p-2 md:w-1/2 
             lg:w-1/4
            `}
          >
            <div className="relative h-[200px] w-full snap-center rounded-3xl shadow">
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
                  size="md:text-xl text-xl"
                  id={movie.id}
                  title={movie.title || movie.name || 'N/A'}
                  pathName="movie"
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
    </main>
  )
}

export default SimilarMovies
