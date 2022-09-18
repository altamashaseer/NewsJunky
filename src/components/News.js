import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: '6',
        category: 'general'
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsJunky`
    }

    async newsUpdate() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.newsUpdate();
    }

    fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: this.state.page + 1
            // loading: false,
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center'>NewsJunky - {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                {/* <h1>article length {this.state.articles.length} length of initial items on screen </h1>
                <span>total results {this.state.totalResults} total results inparsed data</span> */}

                <InfiniteScroll dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}>

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
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
}

export default News



// NEWSITEM ALTERNATE:
//  <NewsItem title={element.title?element.title.slice(0,40):''} description={element.description?element.description.slice(0,80):''} imageUrl={element.urlToImage}
// newsUrl={element.url} />
//  <NewsItem title={element.title?.slice(0,40)} description={element.description?.slice(0,80)} imageUrl={element.urlToImage}
// newsUrl={element.url} />   THIS ALSO WORK WITHOUT TURNARY OPERATOR 