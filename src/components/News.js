import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalizeFirstLetter(props.category)} - NewsJunky`

    const newsUpdate = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        // eslint-disable-next-line
        newsUpdate();
    }, [])

    // async componentDidMount() {
    //     this.newsUpdate();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setPage(page + 1)
    };

    return (
        <>
            <h1 className='text-center'>NewsJunky - {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            {/* <h1>article length {this.state.articles.length} length of initial items on screen </h1>
                <span>total results {this.state.totalResults} total results in parsed data</span> */}

            <InfiniteScroll dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string
}
export default News
