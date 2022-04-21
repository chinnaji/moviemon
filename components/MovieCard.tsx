import React from 'react'
import img from '../images/img.png'
import Image from 'next/image'
function MovieCard() {
  return (
    <div className="relative min-h-[318px] min-w-[236px] snap-center rounded-3xl shadow">
      {/* content */}
      <Image
        src={img}
        className="z-10"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />
      {/* overlay */}
      {/* <div
        className="absolute z-20 h-screen w-screen 
                bg-gradient-to-r from-[#010101]  to-[#3D3D3D] opacity-30 "
      ></div> */}
    </div>
  )
}

export default MovieCard
