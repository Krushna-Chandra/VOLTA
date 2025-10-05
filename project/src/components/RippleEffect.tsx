import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Watch for theme changes (Tailwind uses 'dark' class on <html>)
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      setIsDarkMode(html.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Ripple creation on mouse move
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 120) return; // throttle
      lastTime = now;

      const newRipple = { id: now, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[9999]">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={`absolute rounded-full animate-ripple-glow ${
            isDarkMode
              ? "bg-cyan-400/30 shadow-[0_0_20px_5px_rgba(0,255,255,0.2)]"
              : "bg-blue-400/30 shadow-[0_0_20px_5px_rgba(0,150,255,0.25)]"
          }`}
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: "100px",
            height: "100px",
            backdropFilter: "blur(6px)",
          }}
        />
      ))}
    </div>
  );
}
