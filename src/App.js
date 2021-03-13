import React, { useRef, useState, Suspense } from 'react'
import { useFrame, Canvas } from 'react-three-fiber'
import { VRCanvas, Interactive } from '@react-three/xr'
import Box from './components/box'
import ThreeMeshUI from 'three-mesh-ui'
import MultilineText from './components/textBody'
import * as THREE from 'three'
import WebXRPolyfill from 'webxr-polyfill'
export default function App() {
  const [isHovered, setIsHovered] = useState(false)
  const polyfill = new WebXRPolyfill()

  return (
    <VRCanvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense
        fallback={
          <mesh>
            <boxBufferGeometry args={[0, 1, -8]} />
          </mesh>
        }>
        {/* multiline text is a custom class that will render any text.  */}
        <MultilineText color={'black'} height={600} spacing={4}>
          {/* TODO: pull this text information from the twine JSON */}
          TextGeometry(text : String, parameters : Object) text \n— The text that needs \nto be shown. parameters — Object that can contains
          the following parameters. font — an instance of THREE.Font. size — Float. Size of the text. Default is 100. height — Float.
          Thickness to extrude text. Default is 50. \n curveSegments — Integer. Number of points on the curves. Default is 12. bevelEnabled
          — Boolean. Turn on bevel. Default is False. \n bevelThickness — Float. How deep into text bevel goes. Default is 10. bevelSize —
          Float. How far from text outline is bevel. \nDefault is 8. bevelOffse t — Float. How far from text outline bevel starts. Default
          is 0. bevelSegments — Integer. Number of bevel segments. \n Default is 3.
        </MultilineText>
      </Suspense>

      <Box position={[0, 1, -8]} />
    </VRCanvas>
  )
}
