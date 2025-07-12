import React, { useRef, useEffect } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles array with 3D properties
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      opacity: number;
      color: string;
      pulse: number;
    }> = [];

    // Create particles with 3D properties
    const createParticles = () => {
      const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 12000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 200 - 100,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${Math.random() * 60 + 10}, 100%, ${50 + Math.random() * 30}%)`,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    createParticles();

    let time = 0;

    // Animation loop with 3D effects
    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create depth-based layering
      const sortedParticles = particles.sort((a, b) => b.z - a.z);

      // Update and draw particles
      sortedParticles.forEach((particle, i) => {
        // Update 3D position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.pulse += 0.05;

        // Wrap around edges with 3D consideration
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < -100) particle.z = 100;
        if (particle.z > 100) particle.z = -100;

        // Calculate 3D perspective
        const perspective = 300;
        const scale = perspective / (perspective + particle.z);
        const projectedX = particle.x + (particle.z * 0.1);
        const projectedY = particle.y + (particle.z * 0.1);
        const projectedSize = particle.size * scale;
        const projectedOpacity = particle.opacity * scale * (0.5 + 0.5 * Math.sin(particle.pulse));

        // Draw particle with 3D glow effect
        const gradient = ctx.createRadialGradient(
          projectedX, projectedY, 0,
          projectedX, projectedY, projectedSize * 3
        );
        gradient.addColorStop(0, `hsla(25, 100%, 60%, ${projectedOpacity})`);
        gradient.addColorStop(0.5, `hsla(25, 100%, 50%, ${projectedOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(25, 100%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(25, 100%, 60%, ${projectedOpacity})`;
        ctx.fill();

        // Draw 3D connections
        sortedParticles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const dz = particle.z - otherParticle.z;
            const distance3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance3D < 120) {
              const otherScale = perspective / (perspective + otherParticle.z);
              const otherProjectedX = otherParticle.x + (otherParticle.z * 0.1);
              const otherProjectedY = otherParticle.y + (otherParticle.z * 0.1);

              ctx.beginPath();
              ctx.moveTo(projectedX, projectedY);
              ctx.lineTo(otherProjectedX, otherProjectedY);

              const opacity = (120 - distance3D) / 120;
              const avgScale = (scale + otherScale) / 2;

              ctx.strokeStyle = `hsla(25, 100%, 50%, ${opacity * avgScale * 0.3})`;
              ctx.lineWidth = avgScale;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default NetworkAnimation;
