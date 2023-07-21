import React from 'react';


function Article ({ title, date="January 1, 1970", preview }) {
  
  // If no date is passed as a prop, use the default value "January 1, 1970"
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

