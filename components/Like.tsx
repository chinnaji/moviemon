import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
type likeId = {
  id: number
}

function Like({ id }: likeId) {
  return (
    <>
      <button
        onClick={() => alert(`${id} added to likes`)}
        className="like_button absolute top-6 right-6 flex w-fit items-center justify-center rounded bg-lime p-2 text-zinc-800 transition delay-150 ease-in-out lg:hidden"
      >
        <BsFillHeartFill />
      </button>
    </>
  )
}

export default Like
