import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TitleCards from './components/TitleCards/TitleCards';
import Account from './pages/Account.jsx';

function Browse() {
  return (
    <div style={{ paddingTop: '90px' }}>
      <TitleCards title="Now Playing" category="now_playing" />
      <TitleCards title="Popular" category="popular" />
      <TitleCards title="Top Rated" category="top_rated" />
      <TitleCards title="Upcoming" category="upcoming" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}
