import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, withRouter, NextRouter } from 'next/router'

type paginationTypes = {
  totalPages: number
  path: string
}
function Pagination({ totalPages, path }: paginationTypes) {
  const { query } = useRouter()
  // minimum number of pages
  const minPage = 1
  // maximum number of pages
  const maxPage = totalPages
  //currentPage page
  const [currentPage, setCurrentPage]: any = useState('')
  // const pages = []
  // currentPage page Id
  const { pageId }: any = query
  // const pageIdToInt = parseInt(pageId)

  function calPageIndex(index: number): number {
    return currentPage === maxPage ? currentPage - index : currentPage + index
  }

  useEffect(() => {
    setCurrentPage(parseInt(pageId))
  }, [pageId])
  // return loading state if page id  is null || undefined
  if (!currentPage) {
    return <h1 className="text-xl text-white">LOADING...</h1>
  }
  return (
    <section className="my-10 mx-auto flex w-fit text-zinc-100">
      {/* hide start button when page gets to the beginning */}
      {currentPage === minPage ? null : ( // </Link> //   <a className="bg-zinc-800 hover:bg-zinc-700 px-3 py-1"> 1</a> // <Link href={`/${path}/1`} passHref>
        <>
          <Link href={`/${path}/1`} passHref>
            <a className="bg-zinc-800 px-3 py-1 hover:bg-zinc-700"> &lt;&lt;</a>
          </Link>

          <Link href={`/${path}/${currentPage - 1}`} passHref>
            <a className="bg-zinc-800 px-3 py-1 hover:bg-zinc-700"> &lt;</a>
          </Link>
        </>
      )}

      {Array(3)
        .fill('1')
        .map((item, index) => (
          <Link key={index} href={`/${path}/${calPageIndex(index)}`} passHref>
            <a
              className={`px-3 py-1 ${
                calPageIndex(index) == currentPage
                  ? 'bg-lime text-black'
                  : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
            >
              {calPageIndex(index)}
            </a>
          </Link>
        ))}

      {/* hide end button when page gets to the end */}
      {currentPage === maxPage - 1 ? null : (
        <>
          <Link href={`/${path}/${currentPage + 1}`} passHref>
            <a className={`bg-zinc-800 px-3 py-1 hover:bg-zinc-700`}> &gt;</a>
          </Link>
          <Link href={`/${path}/${totalPages - 1}`} passHref>
            <a className="bg-zinc-800 px-3 py-1 hover:bg-zinc-700"> &gt;&gt;</a>
          </Link>
        </>
      )}
    </section>
  )
}

export default Pagination
