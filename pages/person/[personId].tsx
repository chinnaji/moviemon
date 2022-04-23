import React from 'react'
import PeoplePage from '../../components/PeoplePage'
import { GetServerSideProps } from 'next'
import { personType } from '../../ts/types'
import Pagination from '../../components/Pagination'
import PersonPage from '../../components/personPage'

type personResType = {
  personDetails: personType
}
function index({ personDetails }: personResType) {
  return (
    <>
      <PersonPage personDetails={personDetails} />
    </>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${context.params?.personId}?api_key=${process.env.API_KEY}&language=en-US`
  )
  // total_pages
  // const { results: movies } = await res.json()
  const personDetails = await res.json()
  return {
    props: {
      personDetails,
    },
  }
}
