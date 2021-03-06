import React from 'react'
import { peopleType } from '../ts/types'
import Image from 'next/image'
import Title from './Title'

import Like from './Like'

type peopleResType = {
  people: peopleType[]
}
function PeoplePage({ people }: peopleResType) {
  return (
    <section className="my-10 mx-auto max-w-[1200px] py-10" id="people">
      <div className="flex flex-wrap">
        {people.map((person, index) => (
          <span
            key={person.id}
            className={`movie_card item_block block w-1/2 p-2 md:w-1/4`}
          >
            <div className="relative h-[230px] w-full snap-center rounded-3xl shadow">
              {/* content */}
              <Image
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                className="item_img z-10 rounded-lg"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
              <div className="absolute bottom-0 z-20 mt-auto flex h-full w-full flex-col justify-end rounded-lg border border-zinc-900 bg-opacity-75 bg-gradient-to-t from-black p-5 text-white">
                <Title
                  size="md:text-2xl text-xl"
                  id={person.id}
                  title={`${person.name}` || 'N/A'}
                  pathName="person"
                />

                <Like id={person.id} type="people" />
              </div>
            </div>
          </span>
        ))}
      </div>
    </section>
  )
}

export default PeoplePage
