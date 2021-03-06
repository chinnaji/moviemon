import React from 'react'
import img from '../images/img.png'
import Image from 'next/image'
import Ratings from './Ratings'
import Date from './Date'
import OverView from './OverView'
import Title from './Title'
import { heroProps } from '../ts/types'

function Hero({ trendingHero }: heroProps) {
  // console.log(trendingHero)
  const {
    name,
    poster_path,
    title,
    backdrop_path,
    release_date,
    overview,
    first_air_date,
    vote_average,
    id,
  } = trendingHero
  return (
    <section className="relative max-h-[calc(100vh-80px)] overflow-hidden md:max-h-[calc(80vh-70px)]">
      <div className="relative h-screen w-screen">
        {/* movie thumbanil */}
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="-z-10"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
        {/* overlay */}
        <div
          className="absolute z-10 h-screen w-screen 
                bg-gradient-to-r from-[#010101]  to-[#3D3D3D] opacity-50 "
        ></div>
        {/* movie details */}

        <section className="absolute top-[42%] z-30 max-w-[1200px] md:top-[30%] md:left-[13%]">
          <div
            className="   w-full  -translate-y-1/2   p-5 text-white
   md:max-w-[800px]  "
          >
            {/* title */}
            <Title
              pathName="movie"
              title={name || title || 'NA'}
              id={id}
              size="text-5xl"
            />

            <div className="flex items-center">
              <Ratings rate={vote_average} />
              <Date date={first_air_date || release_date || 'N/A'} />
            </div>

            {/* description */}
            <OverView overView={overview} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
