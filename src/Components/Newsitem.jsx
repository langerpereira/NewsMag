import React from 'react'
import image from '../assets/a.png'

const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src ? src : image}
        alt={title}
        style={{ width: '100%', height: 'auto' }} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem