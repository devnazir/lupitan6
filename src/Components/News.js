import { useContext, useEffect, useState } from 'react'
import NewsContext from '../Context/NewsContext'

function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=a6c2e9f0a7df4d8abb6e2975e097ee7e'
        async function fetchData() {
            const dataNews = await (await fetch(url)).json()
            setNews(dataNews.articles)
        }

        fetchData()
    }, [])

    return (
        <section className='news-container'>
            <NewsContext.Provider value={news}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </NewsContext.Provider>
        </section>
    )
}

function NewsCard() {
    const news = useContext(NewsContext)
    return (
        <>
            {
                news.map((news, index) => {
                    if(news.urlToImage === null) {
                        news.urlToImage = 'https://klubanet.files.wordpress.com/2015/05/blank-thumbnail.jpg'
                    }

                    return (
                        <div className='news-card' key={index}>
                            <div className='thumbnail'>
                                <img src={news.urlToImage} alt='thumbnail'/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default News