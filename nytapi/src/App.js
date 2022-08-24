import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsCard from './Components/NewsCard';
import './App.css';

const App=()=>{


  const [articles, setArticles]=useState([]); 
  const [search, setSearch]=useState('');
  const [query, setQuery]=useState('');
  const [markedArticles, setMarkedArticles]=useState([])

  const apiTest=()=>{
    const response = axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=uJPywsNgPmIQKQ8Vn5w9oPOBPA7CJFMN`);
    return response;
  }

  useEffect(()=>{
    apiTest()
      .then((d)=>{
        setArticles(d.data.response.docs)
        console.log(d.data.response.docs);
      })
  }, [query])

  const updateSearch=(e)=>{
    setSearch(e.target.value)
  }
  
  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div>
      <h1>New York Times Api</h1>
      <form onSubmit={getSearch}>
      <input type='text' placeholder='Search for articles...' onChange={updateSearch}></input>
      <button>Submit</button>
      <br/>
      </form>
      <NewsCard articles={articles}/>
    </div>
    

  )
}

export default App;
