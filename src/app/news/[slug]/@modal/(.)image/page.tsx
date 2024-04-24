'use client'
import { DUMMY_NEWS } from '@/dummy-news'
import { INews } from '@/interfaces/news'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

const InterceptedImagePage = ({params}:{params:{slug:string}}) => {
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug) as INews

    const router = useRouter()

  if(!newsItem) {
    notFound()
  }
  return (
    <>
        <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className='fullscreen-image'>
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} height={1000} width={1000}/>
                </div>
            </dialog>
    </>
  )
}

export default InterceptedImagePage