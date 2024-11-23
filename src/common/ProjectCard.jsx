import React from 'react';

const ProjectCard = ({src, link, title, description, className}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              className="hover"
              src={src}
              alt={`${title} Logo`}
            />
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
  )
}

export default ProjectCard
