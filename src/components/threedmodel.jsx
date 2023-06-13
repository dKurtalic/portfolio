import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ReactModel from '../components/ReactModel';

const Threedmodel = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        marginTop: '3rem'
      }}
    >


      <Canvas style={{ width: '400px', height: '400px' }}>
        <OrbitControls enableZoom={false} />
        <ReactModel position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]} />
      </Canvas>
    </div>
  );
};

export default Threedmodel;
