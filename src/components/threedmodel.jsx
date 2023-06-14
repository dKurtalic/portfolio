import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import SpotifyModel from '../components/SpotifyModel';
import ReactModel from '../components/ReactModel'

/*Presets can be: apartment, city, dawn, forest, lobby, night, park, studio, */
const Threedmodel = () => {


  return (
    <div
      style={{
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3rem'
      }}
    >
      <Canvas style={{ width: '400px', height: '400px' }}>

        <Stage environment="city" intensity={0.2} castShadow>

          <ReactModel position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Threedmodel;
