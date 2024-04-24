import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { DUMMY_NEWS } from '@/dummy-news'

const NewsPage = () => {
  return (
    <>
        <h1>News Page</h1>
        <ul className="news-list">
          {DUMMY_NEWS.map(newsItem => (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100}/>
                <span>{newsItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
    </>
  )
}

export default NewsPage