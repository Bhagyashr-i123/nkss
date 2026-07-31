'use client';

import React, { useEffect, useRef } from 'react';

export const ThreeDCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    // 3D Particles Sphere Grid Setup
    const NUM_PARTICLES = 120;
    const RADIUS = Math.min(width, height) * 0.32;
    let angleX = 0.002;
    let angleY = 0.003;

    interface Particle3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
    }

    const particles: Particle3D[] = [];

    // Fibonacci Sphere Distribution for uniform 3D placement
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const y = 1 - (i / (NUM_PARTICLES - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      particles.push({
        x: x * RADIUS,
        y: y * RADIUS,
        z: z * RADIUS,
        baseX: x * RADIUS,
        baseY: y * RADIUS,
        baseZ: z * RADIUS,
        color: i % 4 === 0 ? '#00F0FF' : i % 3 === 0 ? '#006699' : '#38BDF8',
      });
    }

    // Mouse Tracking for Interactive 3D Perspective Rotation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left - width / 2;
      const cy = e.clientY - rect.top - height / 2;
      mouseX = cx * 0.0001;
      mouseY = cy * 0.0001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const currentAngleX = angleX + mouseY;
      const currentAngleY = angleY + mouseX;

      // Rotate points in 3D Space
      particles.forEach((p) => {
        // Rotation Y
        const cosY = Math.cos(currentAngleY);
        const sinY = Math.sin(currentAngleY);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotation X
        const cosX = Math.cos(currentAngleX);
        const sinX = Math.sin(currentAngleX);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;
      });

      // Sort by Z for Depth Rendering
      particles.sort((a, b) => b.z - a.z);

      // Draw 3D Connecting Lines between nearby nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < RADIUS * 0.45) {
            const alpha = (1 - dist / (RADIUS * 0.45)) * 0.25 * ((particles[i].z + RADIUS) / (RADIUS * 2));
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha.toFixed(2)})`;
            ctx.beginPath();
            const fov = 400;
            const scale1 = fov / (fov + particles[i].z);
            const scale2 = fov / (fov + particles[j].z);
            ctx.moveTo(cx + particles[i].x * scale1, cy + particles[i].y * scale1);
            ctx.lineTo(cx + particles[j].x * scale2, cy + particles[j].y * scale2);
            ctx.stroke();
          }
        }
      }

      // Draw Glowing 3D Nodes
      particles.forEach((p) => {
        const fov = 400;
        const scale = fov / (fov + p.z);
        const projX = cx + p.x * scale;
        const projY = cy + p.y * scale;
        const size = Math.max(1, (p.z + RADIUS) / RADIUS * 3.5);
        const opacity = Math.max(0.1, (p.z + RADIUS) / (RADIUS * 2));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow Halo
        if (p.z > 0) {
          ctx.fillStyle = 'rgba(0, 240, 255, 0.3)';
          ctx.beginPath();
          ctx.arc(projX, projY, size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};
