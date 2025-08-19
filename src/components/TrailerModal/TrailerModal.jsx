import { useEffect } from 'react'
import './TrailerModal.css'


export default function TrailerModal({ videoKey, onClose, title = 'Trailer' }) {
  
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  if (!videoKey) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} modal`}
    >
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close trailer">
            ✕
          </button>
        </div>

        <div className="video-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
