import { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { tmdb } from '../../lib/tmdb';
import TrailerModal from '../TrailerModal/TrailerModal';


export default function TitleCards({ title, category }) {
  const [items, setItems] = useState([])
  const [activeVideo, setActiveVideo] = useState(null)   // YouTube key
const [activeTitle, setActiveTitle] = useState('Trailer')
const [loadingVideo, setLoadingVideo] = useState(false)

  const listRef = useRef(null)

  useEffect(() => {
    let active = true
    const path = `movie/${category || 'now_playing'}?language=en-US&page=1`
    tmdb(path)
      .then(d => { if (active) setItems(Array.isArray(d?.results) ? d.results : []) })
      .catch(() => { if (active) setItems([]) })
    return () => { active = false }
  }, [category])

  const openTrailer = async (movie) => {
  if (!movie?.id) return
  setLoadingVideo(true)
  setActiveVideo(null)
  setActiveTitle(movie.title || movie.original_title || movie.name || 'Trailer')

  try {
    const data = await tmdb(`movie/${movie.id}/videos?language=en-US`)
    const results = Array.isArray(data?.results) ? data.results : []
    const pick =
      results.find(v => v.site === 'YouTube' && v.type === 'Trailer') ||
      results.find(v => v.site === 'YouTube' && v.type === 'Teaser') ||
      results.find(v => v.site === 'YouTube')

    if (pick?.key) {
      setActiveVideo(pick.key)
    } else {
      alert('No trailer available for this title yet.')
    }
  } catch {
    alert('Failed to load trailer.')
  } finally {
    setLoadingVideo(false)
  }
}


  const onWheel = e => {
    e.preventDefault()
    if (listRef.current) listRef.current.scrollLeft += e.deltaY
  }

  return (
    <div className="titlecards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={listRef} onWheel={onWheel}>
        {items.map(item => {
          const src =
            item.backdrop_path || item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
              : ''
          const name = item.original_title || item.title || item.name || ''
          return (
  <div className="card" key={item.id ?? `${name}-${Math.random()}`}>
    <button
      className="card-btn"
      onClick={() => openTrailer(item)}
      disabled={loadingVideo}
      aria-label={`Play trailer: ${name}`}
    >
      <img src={src} alt={name} loading="lazy" />
      <p>{name}</p>
    </button>
  </div>
)

        })}
      </div>
      {activeVideo && (
  <TrailerModal
    videoKey={activeVideo}
    title={activeTitle}
    onClose={() => setActiveVideo(null)}
  />
)}

    </div>
  )
}
