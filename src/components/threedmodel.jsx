import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import SpotifyModel from '../components/SpotifyModel';
import ReactModel from '../components/ReactModel'
import Model from './ReactModel';

/*Presets can be: apartment, city, dawn, forest, lobby, night, park, studio, */


const Threedmodel = ({ scale, rotationOption }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation((prevRotation) => prevRotation + window.scrollY * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getRotation = () => {
    if (rotationOption === 2) {
      return [0, rotation, 0]; // Rotate around Y-axis
    } else if (rotationOption === 1) {
      return [rotation, 0, 0]; // Rotate around X-axis
    } else {
      return [0, 0, rotation]; // Rotate around Z-axis (default)
    }
  };

  return (
    <Canvas style={{ margin: 0, padding: 0, top: 0 }}>
      <Stage environment="city" intensity={0.2} castShadow>
        <mesh rotation={rotationOption !== 0 ? getRotation() : undefined}>
          <Model position={[0, 0, 0]} scale={scale} />
        </mesh>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Threedmodel;
