import { DUMMY_NEWS } from '@/dummy-news'
import { INews } from '@/interfaces/news'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const ImagePage = ({params}:{params:{slug:string}}) => {
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug) as INews

  if(!newsItem) {
    notFound()
  }
  return (
    <div className='fullscreen-image'>
        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={1000} height={1000}/>
    </div>
  )
}

export default ImagePage