import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className='my-3' >
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
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
}

export default NewsItem

