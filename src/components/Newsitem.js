import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,decription,imgurl,newsurl,author,date } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgurl?imgurl:"https://img.jagranjosh.com/images/2023/June/2162023/ORCA-22_11zon.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body" style={{border:'3px solid orange' ,backgroundColor:'lightblue'}}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text" style={{fontStyle:'italic',}}>{decription}...</p>
              <p className="card-text"><small className="text-body-secondary">by {author?author:"Unknown"} on {date?date:"Date Not Available"}</small></p>
              <a rel="noreferrer" href={newsurl?newsurl:""} target='_blank' className="btn btn-sm" style={{backgroundColor:'orange'}}>Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

