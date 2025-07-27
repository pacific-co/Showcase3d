import Cube from '../assets/basic/Cube';
import Sphere from '../assets/basic/Sphere';
import Cone from '../assets/basic/Cone';
import TorusKnot from '../assets/complex/TorusKnot';
import RoundedCube from '../assets/complex/RoundedCube';
import WavyTorus from '../assets/complex/WavyTorus';

export default function ModelViewer({ model, color, scale }) {
  const props = { color };

  const models = {
    cube: <Cube {...props} />,
    sphere: <Sphere {...props} />,
    cone: <Cone {...props} />,
    torusknot: <TorusKnot {...props} />,
    roundedcube: <RoundedCube {...props} />,
    wavytorus: <WavyTorus {...props} />,
  };

  return <group scale={[scale, scale, scale]}>{models[model]}</group>;
}
