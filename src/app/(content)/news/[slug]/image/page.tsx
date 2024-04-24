import { INews } from '@/interfaces/news'
import { getNewsItem } from '@/lib/news'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const ImagePage = async({params}:{params:{slug:string}}) => {
    const newsItem = await getNewsItem(params.slug) as INews
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