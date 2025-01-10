

'use client';

import { useEffect, useState} from 'react';
import NewsList from "@/components/news-list";

export default function NewsPage(){
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();
  async function fetchNews(){
    setIsLoading(true);
   const response = await fetch('http://localhost:9090/news');
  
   if(!response.ok){
    setError('Failed to fetch news.');
    setIsLoading(false);
  }
 
  const news = await response.json();
  setIsLoading(false);
  setNews(news)
  }

  useEffect(() => {
  fetchNews();
  },[]);

  if(isLoading){
    return <p>Loading...</p>;
  }
  if(error){
    return <p>Error</p>;
  }
  let newsContent;

  if(news){
    console.log("test");
    newsContent = <NewsList news={news} />

  }

  return(
  <>
     <h1>News Page</h1>
      {newsContent}
  </>
  )
}
