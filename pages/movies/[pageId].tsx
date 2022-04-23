import React from 'react'
import { useRouter } from 'next/router'
import MoviesPage from '../../components/MoviesPage'
import { GetServerSideProps } from 'next'
import { generalTMDBResponse } from '../../ts/types'
import Pagination from '../../components/Pagination'

type moviesType = {
  data: generalTMDBResponse[]
  totalPages: number
}
function index({ data, totalPages }: moviesType) {
  return (
    <>
      <MoviesPage data={data} />

      <Pagination path="movies" totalPages={totalPages} />
    </>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${context.params?.pageId}
                `
  )
  // total_pages
  // const { results: movies } = await res.json()
  const movies = await res.json()
  // console.log(movies.total_pages)
  return {
    props: {
      data: movies.results,
      totalPages: movies.total_pages,
    },
  }
}
