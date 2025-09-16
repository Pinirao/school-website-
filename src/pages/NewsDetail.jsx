// filepath: c:\Users\kollu\Downloads\School website\school-website-1\src\pages\NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function NewsDetail() {
  const { newsId } = useParams();

  return (
    <div>
      <h1>News Detail for {newsId}</h1>
    </div>
  );
}

export default NewsDetail;