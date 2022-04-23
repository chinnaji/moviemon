import React from 'react'
import { GetServerSideProps } from 'next'
import { tvDetailsType, videosType, generalTMDBResponse } from '../../ts/types'
import TvPage from '../../components/TvPage'
import SimilarMovies from '../../components/SimilarMovies'

type movieResType = {
  tvDetails: tvDetailsType
  videos: videosType[]
  similarMovies: generalTMDBResponse[]
}
function index({ tvDetails, similarMovies, videos }: movieResType) {
  return (
    <>
      <TvPage videos={videos} tvDetails={tvDetails} />
      <SimilarMovies isTv={true} similar={similarMovies} />
    </>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${context.params?.movieId}?api_key=${process.env.API_KEY}&language=en-US`
  )

  const res2 =
    await fetch(`https://api.themoviedb.org/3/tv/${context.params?.movieId}/videos?api_key=${process.env.API_KEY}&language=en-US
  `)
  const res3 = await fetch(
    `https://api.themoviedb.org/3/tv/${context.params?.movieId}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1    `
  )

  const tvDetails = await res.json()
  const videos = await res2.json()
  const similarMovies = await res3.json()

  console.log(similarMovies.results)
  return {
    props: {
      tvDetails,
      videos: videos.results,
      similarMovies: similarMovies.results,
    },
  }
}
