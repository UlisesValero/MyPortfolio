import { useEffect, useRef, useState } from "react";

export default function ScrollProgressBar() {
  const [targetWidth, setTargetWidth] = useState(0);
  const currentWidthRef = useRef(0);
  const rafRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setTargetWidth(scrollPercent);
    };

    const animate = () => {
      currentWidthRef.current += (targetWidth - currentWidthRef.current) * 0.1;
      if (barRef.current) {
        barRef.current.style.width = `${currentWidthRef.current}%`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [targetWidth]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        ref={barRef}
        className="h-full bg-green-400 dark:bg-salmon"
        style={{ width: "0%" }}
      />
    </div>
  );
}
