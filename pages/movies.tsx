import React from 'react'
import axios from 'axios'
import { generalTMDBResponse } from '../ts/types'
import MoviesPage from '../components/MoviesPage'

type moviesType = {
  data: generalTMDBResponse[]
}

function movies({ data }: moviesType) {
  console.log(data)
  return (
    <main className="my-10 mx-auto max-w-[1200px]">
      <MoviesPage movies={data} />
    </main>
  )
}

export default movies

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US`
  )
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data: data.results,
    },
  }
}
