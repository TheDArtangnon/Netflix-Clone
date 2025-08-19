// src/lib/tmdb.js
export const tmdb = (path) =>
  fetch(`https://api.themoviedb.org/3/${path}`, {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}` },
  }).then((r) => r.json())
