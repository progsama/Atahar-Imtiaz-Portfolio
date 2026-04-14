import * as THREE from "three";
import { useMemo } from "react";

const HeroLights = () => {
  const rectLight = useMemo(
    () => new THREE.RectAreaLight("#4158bd", 8, 3, 2),
    []
  );

  return (
    <>
      <spotLight
        position={[1, 5, 3]}
        angle={0.08}
        intensity={200}
        penumbra={0.5}
        color="#3272e0"
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={1}
        color="#b8e6fa"
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#a5cef5"
      />

      <primitive object={rectLight} position={[1, 3, 4]} intensity={15} rotation={[-Math.PI / 4, Math.PI / 4, 0]} />

      <pointLight position={[0, 1, 0]} intensity={10} color="#a3dcf1" />

      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
