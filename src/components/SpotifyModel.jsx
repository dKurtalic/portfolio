/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 spotifyModel.gltf --transform
Author: juancarlos305770811 (https://sketchfab.com/juancarlos305770811)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spotify-logo-87da97a4c5fa49139804dcf8dba4bbf2
Title: Spotify Logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/spotifyModel-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball_green_0.geometry} material={materials.green} position={[0, 0.053, 0]} rotation={[-Math.PI / 2, 0, -1.576]} scale={[0.114, 0.86, 0.86]} />
      <mesh geometry={nodes.NurbsCurve_black_0.geometry} material={materials.black} position={[-0.013, -0.23, 0.193]} rotation={[0, -0.005, -0.08]} scale={[1.166, 1.082, 0.23]} />
    </group>
  )
}

useGLTF.preload('/spotifyModel-transformed.glb')
