export default function RoundedCube({ color }) {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1, 16, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
