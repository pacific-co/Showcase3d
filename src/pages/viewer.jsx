import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelViewer from '../components/ModelViewer';
import Toolbar from '../components/Toolbar';
import { Suspense, useState } from 'react';

export default function Viewer() {
  const { model } = useParams();
  const [color, setColor] = useState('#4ADE80');
  const [scale, setScale] = useState(1);

  const jsxSnippet = `<${model?.charAt(0).toUpperCase() + model?.slice(1)} color="${color}" scale={[${scale}, ${scale}, ${scale}]} />`;

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', position: 'relative' }}>
      <Toolbar color={color} setColor={setColor} scale={scale} setScale={setScale} />

      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        background: '#0d1117',
        padding: '1rem',
        borderRadius: '8px',
        color: '#fff',
        fontFamily: 'SF Mono, monospace',
        whiteSpace: 'pre-wrap',
        maxWidth: '300px',
        zIndex: 10,
      }}>
        <code>{jsxSnippet}</code>
        <button
          onClick={() => navigator.clipboard.writeText(jsxSnippet)}
          style={{
            marginTop: '0.5rem',
            padding: '0.5rem',
            background: '#222',
            border: '1px solid #555',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}>
          Copy Code
        </button>
      </div>

      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <ModelViewer model={model} color={color} scale={scale} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
