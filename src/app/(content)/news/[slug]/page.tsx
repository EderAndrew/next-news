
import { INews } from '@/interfaces/news'
import { getNewsItem } from '@/lib/news'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const NewsDetailPage = async ({params}:{params:{slug:string}}) => {
  const newsItem = await getNewsItem(params.slug) as INews

  if(!newsItem) {
    notFound()
  }
  
  return (
    <article>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100}/>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
        <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage