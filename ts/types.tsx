export type generalTMDBResponse = {
  adult?: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type?: string
  name?: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  origin_country?: string[]
  first_air_date?: string
}
export type HomepageData = {
  // data: {
  trendingMovies: generalTMDBResponse[]
  latestMovies: generalTMDBResponse[]
  // latestTv: generalTMDBResponse[]
  // latestPeople: generalTMDBResponse[]
  // }
}

export type ratingProps = {
  rate: number
}
export type dateProps = {
  date: string
}
export type description = {
  overView: string
}
export type title = {
  title: string
  id: number
}
