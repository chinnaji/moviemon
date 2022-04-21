import React from 'react'
import { FaStar } from 'react-icons/fa'
import { ratingProps } from '../ts/types'

function Ratings({ rate }: ratingProps) {
  // divide vote_average and take to nearest whole number
  const convertRate = Math.floor(rate / 2)
  //   create an array with number of elements based on value from  convertRate
  const arrayDeps = Array(convertRate).fill(convertRate)
  return (
    <div className="my-3 flex text-xl text-lime">
      {/* map over arrayDeps and return rating stars */}
      {arrayDeps.map((arrayDep, index) => (
        <FaStar />
      ))}

      {/* <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt /> */}
    </div>
  )
}

export default Ratings
