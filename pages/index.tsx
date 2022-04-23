import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import img from '../images/img.png'
import Image from 'next/image'
import { HomepageData, peopleType } from '../ts/types'
import axios from 'axios'
import TrendingMoviesSection from '../components/TrendingMoviesSection'
import TrendingTvSection from '../components/TrendingTvSection'
import PeopleSection from '../components/PeopleSection'

const Home: NextPage<{ data: HomepageData }> = ({ data }) => {
  const { trendingMovies, latestMovies, latestTv, people } = data
  // const [latestPeople] = data
  // console.log(latestTv)
  // console.log(people)

  const trendingHero = trendingMovies[1]
  return (
    <main>
      <Hero trendingHero={trendingHero} />

      <TrendingMoviesSection latestMovies={latestMovies} />
      <TrendingTvSection latestTv={latestTv} />
      <PeopleSection people={people} />
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
  const res3 = axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US`
  )
  const res4 = axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const [trendingMovies, latestMovies, latestTv, people] = await Promise.all([
    res1,
    res2,
    res3,
    res4,
  ])
  console.log(people.data)

  return {
    props: {
      // homepageData: data,
      data: {
        trendingMovies: trendingMovies.data.results,
        latestMovies: latestMovies.data.results,
        latestTv: latestTv.data.results,
        people: people.data.results,
      },
    },
    revalidate: 1,
  }
}
