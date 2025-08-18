import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams } from 'react-router-dom';

export default function Player() {

const {id} = useParams();

  const [apiData, setApiData ] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  })

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTNmMjliNjk0NTdlOTk0YTQ1MmJmN2ZmMjJiOWM4ZCIsIm5iZiI6MTc1NTAyOTkwNC42MjEsInN1YiI6IjY4OWJhMTkwYjhhOWQwNjZlNDhlYjZhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjS5FtQl9tSj_wYWBSTovr9p2d2dulMzhs7g-sXm4Qk'
  }
};

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
    <img src={back_arrow_icon} alt="" />
    <iframe width='90%' height='90%'
    src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>
    </div>
    </div>
  )
}
