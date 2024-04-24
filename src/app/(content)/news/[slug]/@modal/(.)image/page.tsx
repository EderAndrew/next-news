import ModalBackdrop from '@/components/modal-backdrop'
import { INews } from '@/interfaces/news'
import { getNewsItem } from '@/lib/news'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const InterceptedImagePage = async({params}:{params:{slug:string}}) => {
    const newsItem = await getNewsItem(params.slug) as INews

  if(!newsItem) {
    notFound()
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
          <div className='fullscreen-image'>
              <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} height={1000} width={1000}/>
          </div>
      </dialog>
    </>
  )
}

export default InterceptedImagePage