    export default function TorusKnot({ color }) {
  return (
    <mesh>
      <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
