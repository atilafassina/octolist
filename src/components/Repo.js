import React from 'react';

const Repo = ({ name, description, link }) => (
  <li className="gh-repo" >
    <a href={link} target="_blank">{name}</a>
    <p>{description}</p>
  </li>
)

export default Repo;
