import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { dateProps } from '../ts/types'

function Date({ date }: dateProps) {
  return (
    <span className="ml-5 flex items-center text-base">
      <BiTimeFive className="text-xl" /> <span className="ml-2">{date}</span>
    </span>
  )
}

export default Date
