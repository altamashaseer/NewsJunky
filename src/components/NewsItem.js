import React, { Component } from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3' >
            <div className="card">
                <div>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : 'https://storage.googleapis.com/afs-prod/media/8fc0c044af78402fbb4ce8aaaef28b27/3000.jpeg'} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small classsName="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='__blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

