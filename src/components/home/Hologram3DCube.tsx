'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hologram3DCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const hologramGroup = new THREE.Group();
    scene.add(hologramGroup);

    // 1. Central 3D Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    hologramGroup.add(coreMesh);

    // 2. Outer Torus Ring 1 (Horizontal)
    const ring1Geo = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xFFB800,
      transparent: true,
      opacity: 0.7,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    hologramGroup.add(ring1Mesh);

    // 3. Outer Torus Ring 2 (Vertical Tilt)
    const ring2Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.5,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    hologramGroup.add(ring2Mesh);

    // Light point
    const pointLight = new THREE.PointLight(0x00F0FF, 2, 100);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      coreMesh.rotation.y += 0.01;
      coreMesh.rotation.x += 0.005;

      ring1Mesh.rotation.z += 0.008;
      ring2Mesh.rotation.x -= 0.006;

      hologramGroup.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[320px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
}
