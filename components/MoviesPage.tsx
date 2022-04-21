import React from 'react'
import { generalTMDBResponse } from '../ts/types'
import Link from 'next/link'
import Title from './Title'
import Like from './Like'
import Image from 'next/image'
import Ratings from './Ratings'
import Date from './Date'

type moviesType = {
  movies: generalTMDBResponse[]
}

function MoviesPage({ movies }: moviesType) {
  return (
    <section className="mx-auto max-w-[1200px]" id="people">
      {/* header */}

      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
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
                  title={movie.title || 'N/A'}
                  pathName="movie"
                />
                <div className="flex items-center">
                  <Ratings rate={movie.vote_average} />
                  <Date date={movie.release_date} />
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

export default MoviesPage
