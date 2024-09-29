import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import SpotifyModel from '../components/SpotifyModel';
import ReactModel from '../components/ReactModel'
import Model from './ReactModel';


/*Presets can be: apartment, city, dawn, forest, lobby, night, park, studio, */
const Threedmodel = ({ scale, rotationOption, imageUrl }) => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setRotation((prevRotation) => prevRotation + window.scrollY * 0.2);
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
    <>
      {imageUrl ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Image spinning around its own axis */}
          <img
            src={imageUrl}
            alt="scroll-rotating"
            style={{
              width: '100px', // Controls the size, can be any value
              height: 'auto', // Auto adjusts the height to maintain the aspect ratio
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center center', // Ensure the image rotates around its center
              transition: 'transform 0.02s linear',
              objectFit: 'contain',

              paddingTop: '20px'
            }}
          />
        </div>
      ) : (
        <Canvas style={{ margin: 0, padding: 0, top: 0 }}>
          <Stage environment="city" intensity={0.2} castShadow>
            <mesh rotation={rotationOption !== 0 ? getRotation() : undefined}>
              <Model position={[0, 0, 0]} scale={scale} />
            </mesh>
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </>
  );
}

export default Threedmodel;
