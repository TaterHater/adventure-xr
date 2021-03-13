import React, { Suspense, useRef, useState, useCallback } from 'react'
import { useLoader } from 'react-three-fiber'
import { TextBufferGeometry, FontLoader, Vector3 } from 'three'
import usePromise from 'react-promise-suspense'

const TextBox = (props) => {
  const data = useLoader(FontLoader, '/MOONGET_Heavy.blob')
  let geometry = new TextBufferGeometry('Hello three.js!', {
    font: data,
    size: 0.1,
    height: 0,
    curveSegments: 12,
    bevelEnabled: false
  })
  const myPromise = new Promise((resolve, reject) => {
    geometry = new TextBufferGeometry(props['children'], { font: data, size: 0.1, height: 0, curveSegments: 32 })
  }).then((res, rej) => {
    console.log(res, rej)
  })

  const onUpdate = useCallback(
    (self) => {
      console.log(props.lineHeight)
      const box = new Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(box)
      self.position.x = -box.x / 2
      self.position.y = -box.y / 2 - props.lineHeight
    },
    [100, 100, 100 + props.lineHeight, 0]
  )
  return (
    <mesh geometry={geometry || null} onUpdate={onUpdate} color={props.color} position={[0, 1, -8]}>
      <meshStandardMaterial color={'#621880'} emissive={'#621880'} flatShading={true} />
    </mesh>
  )
}

const MultilineText = ({ text, size = 0.1, lineHeight = 1, position = [0, 1, -8], ...props }) => {
  console.log(position)
  return props.children
    .split('\\n')
    .map((text, index) => (
      <TextBox
        key={index}
        size={size}
        {...props}
        lineHeight={index * (lineHeight * size * props.spacing || 2)}
        position={[position[0], position[1] - index * lineHeight, position[2]]}
        children={text}
      />
    ))
}

export default MultilineText
