'use client';

import { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ScrollClockworkProps {
  slides?: Slide[];
}

const defaultSlides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop",
    title: "AI Threat Detection",
    description: "Neural networks that identify and neutralize cyber threats in real-time across your entire infrastructure.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=800&fit=crop",
    title: "Network Defense",
    description: "Autonomous perimeter protection powered by machine learning and behavioral analysis.",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop",
    title: "Data Encryption",
    description: "Quantum-ready encryption protocols safeguarding your most sensitive data assets.",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=800&fit=crop",
    title: "SOC Automation",
    description: "AI-driven security operations that respond to incidents in milliseconds, not hours.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=800&fit=crop",
    title: "Zero Trust",
    description: "Enterprise-grade zero trust architecture that verifies every access request automatically.",
  },
];

const SEGMENT_COLORS = [
  "#E8573A", "#F2A93B", "#4ECDC4", "#556FB5", "#C44DFF", "#0065F4", "#22C55E",
];

const SEGMENT_COUNT = 7;

interface Segment {
  color: string;
  width: number;
  offset: number;
  strokeW: number;
}

function generateSegments(radius: number, count: number): Segment[] {
  const circumference = 2 * Math.PI * radius;
  const gapSize = 8;
  const totalGap = count * gapSize;
  const usable = circumference - totalGap;
  const segmentWidth = usable / count;

  const segments: Segment[] = [];
  let offset = 0;
  for (let i = 0; i < count; i++) {
    segments.push({
      color: SEGMENT_COLORS[i % SEGMENT_COLORS.length],
      width: segmentWidth,
      offset,
      strokeW: 4,
    });
    offset += segmentWidth + gapSize;
  }
  return segments;
}

const RADIUS = 260;

export const ScrollClockwork = ({ slides = defaultSlides }: ScrollClockworkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRef<(SVGCircleElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const segments = useMemo(() => generateSegments(RADIUS, SEGMENT_COUNT), []);
  const circumference = 2 * Math.PI * RADIUS;

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const totalSlides = slides.length;

      segments.forEach((seg, i) => {
        const el = segmentRefs.current[i];
        if (!el) return;
        el.style.strokeDasharray = `${seg.width} ${circumference - seg.width}`;
        el.style.strokeDashoffset = `${circumference - seg.offset + seg.width}`;
        gsap.set(el, { opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalSlides * 100}%`,
          scrub: 0.5,
          pin: true,
          pinReparent: false,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * totalSlides),
              totalSlides - 1
            );
            setActiveSlide(idx);
          },
        },
      });

      // Reveal segments tied to each slide
      segments.forEach((seg, i) => {
        const segStart = i;
        tl.to(segmentRefs.current[i]!, { opacity: 1, duration: 0.3, ease: "power2.out" }, segStart);
        tl.to(segmentRefs.current[i]!, {
          strokeDashoffset: `${circumference - seg.offset}`,
          duration: 0.5,
          ease: "power2.out",
        }, segStart);
      });

      // Animate text
      slides.forEach((_, i) => {
        const startTime = i;
        const text = textsRef.current[i];
        if (i === 0) {
          gsap.set(text, { opacity: 1, y: 0 });
        } else {
          gsap.set(text, { opacity: 0, y: 40 });
        }
        if (i > 0) {
          tl.to(text, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, startTime - 0.35);
        }
        if (i < totalSlides - 1) {
          tl.to(text, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, startTime + 0.6);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [segments, circumference, slides]);

  const parallaxX = mousePos.x * 8;
  const parallaxY = mousePos.y * 8;
  const rotateX = mousePos.y * -5;
  const rotateY = mousePos.x * 5;

  return (
    <div>
      <div ref={containerRef} className="relative h-screen overflow-hidden bg-slate-950">
        <div className="flex h-full items-center justify-center px-8 md:px-16 lg:px-24">
          {/* Left side text */}
          <div className="relative z-10 flex-1 max-w-md">
            {slides.map((slide, i) => (
              <div
                key={i}
                ref={(el) => { textsRef.current[i] = el; }}
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: 0 }}
              >
                <span className="text-sm font-mono uppercase tracking-[0.3em] text-[#0065F4] mb-4">
                  {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center image viewer */}
          <div
            className="relative flex-1 flex items-center justify-center"
            style={{
              perspective: "1000px",
            }}
          >
            <div
              style={{
                transform: `translateX(${parallaxX}px) translateY(${parallaxY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.15s ease-out",
              }}
            >
              {/* Outer glow ring SVG */}
              <svg
                width="680"
                height="680"
                viewBox="0 0 560 560"
                className="absolute z-20 pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-90deg)",
                }}
              >
                {/* Base track */}
                <circle
                  cx="280" cy="280" r={RADIUS}
                  fill="none"
                  stroke="hsla(0, 0%, 100%, 0.06)"
                  strokeWidth="2"
                />
                {/* Glowing segments */}
                {segments.map((seg, i) => (
                  <circle
                    key={i}
                    ref={(el) => { segmentRefs.current[i] = el; }}
                    cx="280" cy="280" r={RADIUS}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={seg.strokeW}
                    strokeLinecap="round"
                    style={{
                      filter: `drop-shadow(0 0 8px ${seg.color}) drop-shadow(0 0 20px ${seg.color}66) drop-shadow(0 0 40px ${seg.color}33)`,
                    }}
                  />
                ))}
              </svg>

              {/* Image circle */}
              <div
                ref={imageRef}
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "560px",
                  height: "560px",
                  boxShadow: `
                    0 0 40px 8px hsla(32, 95%, 55%, 0.2),
                    0 0 80px 20px hsla(170, 60%, 50%, 0.1),
                    inset 0 0 60px 10px hsla(0, 0%, 0%, 0.5),
                    inset 0 -20px 40px hsla(0, 0%, 0%, 0.3)
                  `,
                  border: "1px solid hsla(0, 0%, 100%, 0.08)",
                }}
              >
                {slides.map((slide, i) => (
                  <img
                    key={i}
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    style={{
                      opacity: activeSlide === i ? 1 : 0,
                    }}
                  />
                ))}
                {/* Glass overlay for futuristic feel */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse at 30% 20%, hsla(0, 0%, 100%, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 80%, hsla(220, 60%, 10%, 0.4) 0%, transparent 50%)
                    `,
                  }}
                />
                {/* Scan line effect */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                  style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 3px, hsla(0,0%,100%,0.02) 3px, hsla(0,0%,100%,0.02) 4px)",
                  }}
                />
              </div>


            </div>

            {/* Ambient glow */}
            <div
              className="absolute rounded-full pointer-events-none -z-10"
              style={{
                width: "750px",
                height: "750px",
                background:
                  "radial-gradient(circle, hsla(32, 95%, 55%, 0.12) 0%, hsla(170, 60%, 50%, 0.06) 40%, transparent 70%)",
                filter: "blur(40px)",
                transform: `translateX(${parallaxX * 0.5}px) translateY(${parallaxY * 0.5}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollClockwork;
