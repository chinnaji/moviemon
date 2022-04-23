import React from 'react'
import img from '../images/img.png'
import Image from 'next/image'
import { TrendingMoviesSection } from '../ts/types'
import Title from './Title'
import OverView from './OverView'
import Link from 'next/link'
import Like from './Like'

function TrendingMoviesSection({ latestMovies }: TrendingMoviesSection) {
  return (
    <section className="mx-auto max-w-[1200px] py-10" id="movies">
      {/* header */}
      <div className="flex items-center justify-between pr-5">
        <h2 className="mb-7 ml-2 w-fit border-b text-2xl font-semibold text-zinc-200 md:text-2xl">
          MOVIES
        </h2>

        <Link passHref href="/movies/1">
          <a className="h-fit border-b text-sm text-zinc-100 hover:border-b-lime hover:text-lime">
            See More
          </a>
        </Link>
      </div>

      <div className="flex flex-wrap">
        {latestMovies.slice(0, 5).map((latestMovie, index) => (
          <span
            key={latestMovie.id}
            className={`movie_card block w-full p-2 ${
              index === 0
                ? 'md:w-[67%]'
                : index === 1
                ? 'md:w-[32%]'
                : 'md:w-[33.3%]'
            }`}
          >
            <div className="relative h-[290px] w-full snap-center rounded-3xl shadow">
              {/* content */}
              <Image
                src={`https://image.tmdb.org/t/p/w500${latestMovie.backdrop_path}`}
                className="z-10 rounded-lg"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
              <div className="absolute bottom-0 z-20 mt-auto flex h-full w-full flex-col justify-end rounded-lg border border-zinc-900 bg-opacity-75 bg-gradient-to-t from-black p-5 text-white">
                <Title
                  size="md:text-2xl text-xl"
                  id={latestMovie.id}
                  title={`${latestMovie.title}` || 'N/A'}
                  pathName="movie"
                />
                <OverView
                  overView={`${latestMovie.overview.slice(0, 80)}...`}
                />

                <Like id={latestMovie.id} type="movies" />
              </div>
            </div>
          </span>
        ))}
      </div>
    </section>
  )
}

export default TrendingMoviesSection
