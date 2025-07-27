import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Browse() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <div className="background">
        <div className="atom"></div>
        <div className="atom"></div>
        <div className="atom"></div>
      </div>

      <h2>Basic Shapes</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button className="btn browse" onClick={() => navigate('/viewer/cube')}>Cube</button>
        <button className="btn browse" onClick={() => navigate('/viewer/sphere')}>Sphere</button>
        <button className="btn browse" onClick={() => navigate('/viewer/cone')}>Cone</button>
      </div>

      <h2>Complex Shapes</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn browse" onClick={() => navigate('/viewer/torusknot')}>Torus Knot</button>
        <button className="btn browse" onClick={() => navigate('/viewer/roundedcube')}>Rounded Cube</button>
        <button className="btn browse" onClick={() => navigate('/viewer/wavytorus')}>Wavy Torus</button>
      </div>
    </div>
  );
}
