import React from 'react'
import { GetServerSideProps } from 'next'
import { movieType, videosType, generalTMDBResponse } from '../../ts/types'
import MoviePage from '../../components/MoviePage'
import SimilarMovies from '../../components/SimilarMovies'

type movieResType = {
  movieDetails: movieType
  videos: videosType[]
  similarMovies: generalTMDBResponse[]
}
function index({ movieDetails, similarMovies, videos }: movieResType) {
  return (
    <>
      <MoviePage videos={videos} movieDetails={movieDetails} />
      <SimilarMovies similar={similarMovies} />
    </>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params?.movieId}?api_key=${process.env.API_KEY}&language=en-US`
  )

  const res2 =
    await fetch(`https://api.themoviedb.org/3/movie/${context.params?.movieId}/videos?api_key=${process.env.API_KEY}&language=en-US
  `)
  const res3 = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params?.movieId}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1    `
  )

  const movieDetails = await res.json()
  const videos = await res2.json()
  const similarMovies = await res3.json()

  return {
    props: {
      movieDetails,
      videos: videos.results,
      similarMovies: similarMovies.results,
    },
  }
}
