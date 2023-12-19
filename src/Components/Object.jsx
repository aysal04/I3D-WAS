import React, { useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { OrbitControls } from '@react-three/drei';
import { OrbitControls, TransformControls } from 'three-stdlib';
import { Mesh } from 'three';

function Face() {
    const face = useLoader(
        OBJLoader,
        process.env.PUBLIC_URL+"meshed-poisson.obj"
    );
    useEffect(() => {
        if (face && face.scene && face.scene.children.length > 0) {
            face.scene.scale.set(0.005, 0.005, 0.005);
            face.scene.position.set(0, -0.035, 0);
            face.scene.traverse((object) => {
              if (object instanceof Mesh) {
                object.castShadow = true;
                object.material.envMapIntensity = 20;
              }
            });
          }
    }, [face]);

    return (
        face && face.scene && face.scene.children.length > 0 && (
          <primitive object={face.scene} />
        )
      );
}

export default Face;
