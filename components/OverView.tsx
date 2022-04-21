import React from 'react'
import { description } from '../ts/types'

function OverView({ overView }: description) {
  return (
    <div>
      <p className="mt-5 mb-2 w-fit border-b border-b-lime text-base font-semibold text-lime">
        OVERVIEW
      </p>
      <p>{overView}</p>
    </div>
  )
}

export default OverView
