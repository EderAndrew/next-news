import NewsList from '@/components/news-list'
import { INews } from '@/interfaces/news'
import { getLatestNews } from '@/lib/news'
import React from 'react'

const LatestNewsPage = async() => {
    const latestNews = await getLatestNews() as INews[]
  return (
    <>
        <h2>Latest Page</h2>
        <NewsList news={latestNews}/>
    </>
  )
}

export default LatestNewsPage