/* eslint-disable array-callback-return */
import { useContext, useEffect, useState } from 'react'
import NewsContext from '../Context/NewsContext'
import '../style/news.css'

const News = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = 'https://api-news-org.herokuapp.com/top-headlines'
        async function fetchData() {
            const dataNews = await (await fetch(url)).json()
            setNews(dataNews.response.articles)
            setLoading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>Berita Utama</h1>
            <section className='news-container'>
                <NewsContext.Provider value={news}>
                    <NewsCard />
                </NewsContext.Provider>
            </section>
        </>
    )
}

const NewsCard = () => {
    const news = useContext(NewsContext)

    const toArticle = ({ nativeEvent: { path } }) => {
        path.some(nodeList => {
            if (nodeList.className === 'news-card') {
                const linkArticle = nodeList.dataset.href
                window.open(linkArticle, 'blank');
            }
        })
    }

    return (
        <>
            {
                news.map((news, index) => {
                    if (news.urlToImage === null) {
                        news.urlToImage = 'https://klubanet.files.wordpress.com/2015/05/blank-thumbnail.jpg'
                    }

                    return (
                        <div className='news-card' key={index} onClick={toArticle} data-href={news.url}>
                            <div className='thumbnail'>
                                <img loading='lazy' src={news.urlToImage} alt='thumbnail' />
                            </div>
                            <div className='description'>
                                <h4 className='title'>{news.title}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default News