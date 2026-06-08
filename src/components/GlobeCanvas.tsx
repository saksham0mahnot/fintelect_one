import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'

function WireGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08
      meshRef.current.rotation.x += delta * 0.02
    }
  })

  return (
    <mesh ref={meshRef}>
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial
          color="#2563EB"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
      {/* Inner glow sphere */}
      <Sphere args={[2.15, 16, 16]}>
        <meshBasicMaterial
          color="#38BDF8"
          wireframe
          transparent
          opacity={0.03}
        />
      </Sphere>
    </mesh>
  )
}

function StarField() {
  const starRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(600 * 3)
    for (let i = 0; i < 600; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 4 + Math.random() * 8
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (starRef.current) {
      starRef.current.rotation.y += delta * 0.01
    }
  })

  return (
    <Points ref={starRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#94A3B8"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function OrbitRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.1
      ring1.current.rotation.z += delta * 0.05
    }
    if (ring2.current) {
      ring2.current.rotation.y += delta * 0.07
      ring2.current.rotation.x -= delta * 0.03
    }
  })

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.2, 0.005, 2, 80]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring2} rotation={[0, Math.PI / 6, Math.PI / 3]}>
        <torusGeometry args={[3.8, 0.004, 2, 80]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.08} />
      </mesh>
    </>
  )
}

const GlobeCanvas = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <StarField />
        <WireGlobe />
        <OrbitRings />
      </Canvas>
    </div>
  )
}

export default GlobeCanvas
