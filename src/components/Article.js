import React from 'react';
import ArticleList from './ArticleList';

function Article ({ title, date, preview, minutes }) {
  
  // If no date is passed as a prop, use the default value "January 1, 1970"
  const formattedDate = date || "January 1, 1970";
  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

