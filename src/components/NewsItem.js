import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl,newsUrl} =this.props;
        return (
            <div className='my-3' >
                <div className="card">
                    <img src={imageUrl?imageUrl:'https://storage.googleapis.com/afs-prod/media/8fc0c044af78402fbb4ce8aaaef28b27/3000.jpeg'} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='__blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

