import { useEffect, useRef } from "react";

const Stars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let stars: { x: number; y: number; r: number }[] = [];
    let angle = 0;

    // Initialize stars based on screen size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isSP = window.innerWidth < 768;
      const starCount = isSP ? 100 : 200;
      const maxRadius = isSP ? 1.5 : 2;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * maxRadius,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      // Draw stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x - centerX, s.y - centerY, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      ctx.restore();

      angle += 0.0001; // Slow rotation
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
    </div >
  );
};

export default Stars;
