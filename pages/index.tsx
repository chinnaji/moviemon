import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import MovieCard from '../components/MovieCard'
import img from '../images/img.png'
import Image from 'next/image'
import { HomepageData } from '../ts/types'
import axios from 'axios'

const Home: NextPage<{ data: HomepageData }> = ({ data }) => {
  const { trendingMovies, latestMovies, latestPeople, latestTv } = data
  // const [latestPeople] = data
  // console.log(data)

  const trendingHero = trendingMovies[1]
  return (
    <main>
      <Hero trendingHero={trendingHero} />

      <section className="mx-auto max-w-[1200px] py-10">
        <h2 className="mb-7 ml-2 w-fit border-b text-2xl font-semibold text-zinc-100">
          Trending Movies
        </h2>
        <div className="flex flex-wrap">
          {/* movie 1 width===75% */}
          <span className="movie_card block w-full p-2 lg:w-[70%]">
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
              <div className="rouded-lg absolute bottom-0 z-20 mt-auto flex h-full w-full flex-col justify-end rounded-lg border border-zinc-900 bg-opacity-75 bg-gradient-to-t from-black p-5 text-white">
                <h3 className="text-xl font-semibold">
                  {' '}
                  Movie title Lodata ipsum 3
                </h3>

                <button className="like_button absolute top-6 right-6 block w-fit rounded bg-red-400 px-2 lg:hidden">
                  Like
                </button>
              </div>
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

      {/* <section className="mx-auto max-w-[1200px] py-10">
        <h2 className="w-fit border-b text-2xl font-semibold text-zinc-100">
          Trending Movies
        </h2>
        <div className="scroll_wheel z-40 mx-auto mb-10 flex snap-x snap-proximity gap-7 overflow-y-hidden overflow-x-scroll pt-10 pb-5">
        </div>
      </section> */}
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const res1 = axios.get(`${process.env.REQ_URL}/api/trending`)
  const res2 = axios.get(`${process.env.REQ_URL}/api/latest/movies`)
  const res3 = axios.get(`${process.env.REQ_URL}/api/latest/tv`)
  const res4 = axios.get(`${process.env.REQ_URL}/api/latest/people`)

  // const [trendingMoviesdata, latestMoviesData, latestTvData, latestPeopleData] =
  //   await Promise.all([res1, res2, res3, res4])
  const [trendingMovies, latestMovies, latestTv, latestPeople] =
    await Promise.all([res1, res2, res3, res4])
  // const response = await fetch('${process.env.REQ_URL}/api/trending')
  // const data = await response.json()
  // console.log(data)
  return {
    props: {
      // homepageData: data,
      data: {
        trendingMovies: trendingMovies.data,
        latestMovies: latestMovies.data,
        latestTv: latestTv.data,
        latestPeople: latestPeople.data,
      },
      // data: [
      //   trendingMovies.data,
      //   latestMovies.data,
      //   latestTv.data,
      //   latestPeople.data,
      // ],
    },
    revalidate: 1,
  }
}
