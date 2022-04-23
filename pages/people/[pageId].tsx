import React from 'react'
import PeoplePage from '../../components/PeoplePage'
import { GetServerSideProps } from 'next'
import { peopleType } from '../../ts/types'
import Pagination from '../../components/Pagination'

type peopleResType = {
  people: peopleType[]
  totalPages: number
}
function index({ people, totalPages }: peopleResType) {
  return (
    <>
      <PeoplePage people={people} />

      <Pagination path="people" totalPages={totalPages} />
    </>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=${context.params?.pageId}`
  )
  // total_pages
  // const { results: movies } = await res.json()
  const people = await res.json()
  return {
    props: {
      people: people.results,
      totalPages: people.total_pages,
    },
  }
}
