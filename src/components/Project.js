import React from "react"

const Project = ({ title, description, link, imgSrc, imgAlt }) => {
  return (
    <div className="card">
      <a href={link}>
        <div className="card-header">
          <div className="card-img">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-body">{description}</div>
      </a>
    </div>
  )
}

export default Project
