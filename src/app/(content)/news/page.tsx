import NewsList from '@/components/news-list'
import { INews } from '@/interfaces/news'
import { getAllNews } from '@/lib/news'


const NewsPage = async() => {
  const news = await getAllNews() as INews[]
  return (
    <>
        <h1>News Page</h1>
        <NewsList news={news} />
    </>
  )
}

export default NewsPage