import { DUMMY_NEWS } from '@/dummy-news'
import { INews } from '@/interfaces/news'
import Image from 'next/image'
import React from 'react'

const NewsDetailPage = ({params}:{params:{slug:string}}) => {
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug) as INews
  
  return (
    <article>
      <header>
        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100}/>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
        <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage