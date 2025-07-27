export default function Cone({ color }) {
  return (
    <mesh>
      <coneGeometry args={[0.75, 1.5, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
