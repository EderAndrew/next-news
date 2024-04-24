import React from 'react'

type Props = {
    children: React.ReactNode
    modal: React.ReactNode
}
const NewsDetailLayout = ({children, modal}:Props) => {
  return (
    <>
        {modal}
        {children}
    </>
  )
}

export default NewsDetailLayout