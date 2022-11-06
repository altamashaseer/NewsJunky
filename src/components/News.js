import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const {Query}=useGlobalContext();
    
    
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(Query)} - NewsJunky`
    
    const newsUpdate = async () => {
        props.setProgress(10)
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&api-key=${props.apiKey}&q=${Query}`;
        console.log('news upadte');
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.response.docs)
        settotalResults(parsedData.response.meta.hits)
        setLoading(false)
        props.setProgress(100)
    }

    const fetchMoreData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page + 1}&api-key=${props.apiKey}&q=${Query}`;
        console.log('fetch more');
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.response.docs))
        setPage(page + 1)
    };
    useEffect(() => {
        newsUpdate();
        console.log('use effect');
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <h1 className='text-center'>NewsJunky - {capitalizeFirstLetter(Query)} Headlines</h1>
            {/* <h2>{articles.length}</h2>
            <h2>{totalResults}</h2> */}
            {loading && <Spinner />}


            <InfiniteScroll dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.web_url}>
                                <NewsItem title={element.headline.main} description={element.abstract ? element.abstract.slice(0, 80) : ''} multimedia={element.multimedia[0]} newsUrl={element.web_url} author={element.byline.original} date={element.pub_date} source={element.source} />
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
