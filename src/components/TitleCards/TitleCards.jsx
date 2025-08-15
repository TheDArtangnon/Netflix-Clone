import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';



export default function TitleCards({title, category}) {

const [apiData, setApiData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTNmMjliNjk0NTdlOTk0YTQ1MmJmN2ZmMjJiOWM4ZCIsIm5iZiI6MTc1NTAyOTkwNC42MjEsInN1YiI6IjY4OWJhMTkwYjhhOWQwNjZlNDhlYjZhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjS5FtQl9tSj_wYWBSTovr9p2d2dulMzhs7g-sXm4Qk'
  }
};



const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  if (cardsRef.current) {
  cardsRef.current.addEventListener('wheel', handleWheel);
}
return() => {
  if (cardsRef.current) {
    cardsRef.current.removeEventListener('wheel', handleWheel);
  }
}
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}

      </div>
    </div>
  )
}
