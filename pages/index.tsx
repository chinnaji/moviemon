import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import MovieCard from '../components/MovieCard'
import img from '../images/img.png'
import Image from 'next/image'
import { HomepageData } from '../ts/types'
import axios from 'axios'
import TrendingMoviesSection from '../components/TrendingMoviesSection'

const Home: NextPage<{ data: any }> = ({ data }) => {
  const { trendingMovies, latestMovies } = data
  // const [latestPeople] = data
  // console.log(latestMovies)

  const trendingHero = trendingMovies[1]
  return (
    <main>
      <Hero trendingHero={trendingHero} />

      <TrendingMoviesSection latestMovies={latestMovies} />

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
  const res1 = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  )
  const res2 = axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US`
  )
  const [trendingMovies, latestMovies] = await Promise.all([res1, res2])
  // console.log(latestMovies.data)

  // const response = await fetch('${process.env.REQ_URL}/api/trending')
  // const data = await response.json()
  // console.log(data)
  return {
    props: {
      // homepageData: data,
      data: {
        trendingMovies: trendingMovies.data.results,
        latestMovies: latestMovies.data.results,
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
