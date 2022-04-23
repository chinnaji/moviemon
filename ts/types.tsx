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
export type peopleType = {
  adult: boolean
  gender: number
  id: number
  known_for: []
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export type HomepageData = {
  // data: {
  trendingMovies: generalTMDBResponse[]
  latestMovies: generalTMDBResponse[]
  latestTv: generalTMDBResponse[]
  people: peopleType[]
  // latestTv: generalTMDBResponse[]
  // latestPeople: generalTMDBResponse[]
  // }
}
export type heroProps = {
  trendingHero: generalTMDBResponse
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
  size: string
  pathName: string
}
export type TrendingMoviesSection = {
  latestMovies: generalTMDBResponse[]
}

export type personType = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}
