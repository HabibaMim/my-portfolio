"use client";

import { useEffect, useRef } from "react";

// Ambient green "code rain" background. Fixed behind all content,
// low opacity so text stays readable. Respects prefers-reduced-motion.
export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const glyphs =
      "01アイウエオカキクケコサシスセソ{}<>/;=[]#$%+-*&^ABCDEFGHJKLMNPQRSTUVWXYZ";

    let width, height, columns, drops, fontSize;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function setup() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 640 ? 14 : 16;
      columns = Math.ceil(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    }

    setup();

    function draw() {
      ctx.fillStyle = "rgba(4, 8, 6, 0.09)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;

      for (let i = 0; i < columns; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading glyph brighter, trailing ones dim green
        const isLead = Math.random() > 0.94;
        ctx.fillStyle = isLead ? "#c8ffe0" : "rgba(57, 255, 140, 0.55)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.55;
      }
    }

    let raf;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    if (prefersReducedMotion) {
      // Draw a single static-ish frame, no animation loop.
      ctx.fillStyle = "rgb(4, 8, 6)";
      ctx.fillRect(0, 0, width, height);
      draw();
    } else {
      loop();
    }

    function handleResize() {
      setup();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
    />
  );
}
