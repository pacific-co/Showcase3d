import * as THREE from 'three';
import { useMemo } from 'react';

export default function WavyTorus({ color }) {
  const geometry = useMemo(() => {
    const geo = new THREE.TorusGeometry(1, 0.4, 32, 100);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = Math.sin(pos.getX(i) * 10) * 0.2;
      pos.setY(i, pos.getY(i) + y);
    }
    pos.needsUpdate = true;
    return geo;
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
