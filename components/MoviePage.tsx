import React from 'react'
import { movieType, videosType, generalTMDBResponse } from '../ts/types'
import Image from 'next/image'
import { FaImdb } from 'react-icons/fa'
type personResType = {
  movieDetails: movieType
  videos: videosType[]
}
function MoviePage({ movieDetails, videos }: personResType) {
  console.log(
    videos.filter((item) => item.official === true && item.site === 'YouTube')
  )
  return (
    <main className="mx-auto max-w-[1200px] py-10 px-5 text-zinc-100">
      <section className="flex flex-wrap">
        <div className="w-full md:w-[35%]">
          <div className="w-md relative flex h-[60vh] snap-center items-center justify-center rounded-3xl shadow md:h-[80vh]">
            {/* content */}
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              className="item_img z-10 rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="mt-10 w-full md:mt-0 md:w-[65%] md:px-7">
          <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
          <p className="text-zinc-400">{movieDetails.release_date}</p>

          {/* video */}
          <div className="mx-auto mt-5 flex w-full flex-col items-center">
            <div className="relative h-0 w-full max-w-full overflow-hidden pb-[60%] md:pb-[40%]">
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].key}`}
                // frameborder="0"
                // allowfullscreen={true}
                className="absolute top-0 left-0 h-full w-full"
              ></iframe>
            </div>
          </div>

          <p className="my-5">
            <b>GENRES</b>
            <br />
            {movieDetails.genres.map((genre) => (
              <span className="pr-1 text-lime" key={genre.id}>
                {genre.name},
              </span>
            ))}
          </p>
          <p className="my-3">
            <b>OVERVIEW</b>
            <br />
            <span className="text-zinc-500">{movieDetails.overview}</span>
          </p>
          <p>
            <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>
              <FaImdb className="text-5xl text-lime" />
            </a>{' '}
          </p>

          {/* <iframe
            id="ytplayer"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/3U7KaI_NPGg"
          ></iframe> */}
        </div>
      </section>
    </main>
  )
}

export default MoviePage
