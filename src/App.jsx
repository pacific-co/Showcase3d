import { Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="home-screen">
      <div className="background">
        <div className="atom"></div>
        <div className="atom"></div>
        <div className="atom"></div>
      </div>

      <h1>Showcase3D</h1>

      <div className="buttons">
        <Link to="/browse">
          <button className="btn browse">🌐 Browse Models</button>
        </Link>

        <button className="btn import">Import</button>

        <button
          className="btn github"
          onClick={() => window.open('https://github.com/pacific-co', '_blank')}
        >
          Visit the developer
        </button>
      </div>
    </div>
  );
}
