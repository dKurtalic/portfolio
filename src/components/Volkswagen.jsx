import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
    const { nodes, materials } = useGLTF('/vwlogo.gltf');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Obj_000001_0.geometry}
                material={materials.mat0}
                position={[0.1, 0.1, 0.61419]}
                rotation={[0, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
            />
            <mesh
                geometry={nodes.Obj_000003_0.geometry}
                material={materials.mat2}
                position={[0.1, 0.0023, 0.09959]}
                rotation={[0, 0, 0]}
                scale={[0.0103, 0.0103, 0.0103]}
            />
        </group>
    );
}

useGLTF.preload('/vwlogo.gltf');