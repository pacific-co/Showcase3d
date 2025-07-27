export default function Sphere({ color }) {
  return (
    <mesh>
      <sphereGeometry args={[0.75, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
