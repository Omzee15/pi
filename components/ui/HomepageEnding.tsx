'use client';

import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clientImages } from '@/lib/client-images';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const centerImage = '/pi-labs_onlysymbot logo.svg';

export const HomepageEnding = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scalerImgRef = useRef<HTMLImageElement>(null);
  const scalerContainerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  // Distribute images across layers at component level
  const { layer1Images, layer2Images, layer3Images } = useMemo(() => {
    const images = clientImages;
    const total = images.length;
    
    // Split: layer3 gets 2, rest distributed to layer1 and layer2
    const layer3Count = Math.min(2, total);
    const remaining = total - layer3Count;
    const layer1Count = Math.min(6, Math.ceil(remaining * 0.6));
    const layer2Count = Math.min(6, remaining - layer1Count);

    return {
      layer3Images: images.slice(0, layer3Count),
      layer1Images: images.slice(layer3Count, layer3Count + layer1Count),
      layer2Images: images.slice(layer3Count + layer1Count, layer3Count + layer1Count + layer2Count),
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const scalerImg = scalerImgRef.current;
    const scalerContainer = scalerContainerRef.current;
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const layer3 = layer3Ref.current;

    if (!section || !scalerImg || !scalerContainer || !layer1 || !layer2 || !layer3) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Capture the natural container size BEFORE any animation
      const naturalWidth = scalerContainer.offsetWidth;
      const naturalHeight = scalerContainer.offsetHeight;
      const initialWidth = window.innerWidth * 0.45;
      const initialHeight = window.innerHeight * 0.45;

      // Set image to initial size (45% of viewport)
      gsap.set(scalerImg, {
        width: initialWidth,
        height: initialHeight,
        position: 'fixed',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        zIndex: 50,
        transformOrigin: 'center center',
      });

      // Animate center image shrinking to natural size
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '60% bottom',
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const w = initialWidth + (naturalWidth - initialWidth) * p;
          const h = initialHeight + (naturalHeight - initialHeight) * p;
          gsap.set(scalerImg, {
            width: w,
            height: h,
            position: p >= 1 ? 'absolute' : 'fixed',
          });
        },
        onLeave: () => {
          gsap.set(scalerImg, { position: 'absolute', width: naturalWidth, height: naturalHeight });
        },
        onEnterBack: () => {
          gsap.set(scalerImg, { position: 'fixed' });
        },
      });

      // Animate layers
      const layers = [layer1, layer2, layer3];
      const easings = ['power1.inOut', 'power3.inOut', 'power4.inOut'];

      layers.forEach((layer, index) => {
        const endOffset = 1 - index * 0.05;

        // Initial state
        gsap.set(layer, { opacity: 0, scale: 0 });

        // Fade animation
        gsap.to(layer, {
          opacity: 1,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: section,
            start: '55% center',
            end: `${endOffset * 100}% bottom`,
            scrub: 1,
          },
        });

        // Scale animation
        gsap.to(layer, {
          scale: 1,
          ease: easings[index],
          scrollTrigger: {
            trigger: section,
            start: '30% center',
            end: `${endOffset * 100}% bottom`,
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-clip"
      style={{ minHeight: '240vh' }}
    >
      <div
        ref={contentRef}
        className="sticky top-0 min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Grid */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] px-4 md:px-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(3, auto)',
            gap: 'clamp(8px, 5vw, 50px)',
          }}
        >
          {/* Layer 1: Outer edges */}
          <div
            ref={layer1Ref}
            className="grid col-span-full row-span-full"
            style={{
              gridTemplateColumns: 'subgrid',
              gridTemplateRows: 'subgrid',
              gridColumn: '1 / -1',
              gridRow: '1 / -1',
            }}
          >
            {layer1Images.map((src, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  gridColumn: i % 2 === 0 ? 1 : -2,
                  gridRow: Math.floor(i / 2) + 1,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full rounded-2xl object-contain"
                />
              </div>
            ))}
          </div>

          {/* Layer 2: Inner columns */}
          <div
            ref={layer2Ref}
            className="grid col-span-full row-span-full"
            style={{
              gridTemplateColumns: 'subgrid',
              gridTemplateRows: 'subgrid',
              gridColumn: '1 / -1',
              gridRow: '1 / -1',
            }}
          >
            {layer2Images.map((src, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  gridColumn: i % 2 === 0 ? 2 : -3,
                  gridRow: Math.floor(i / 2) + 1,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full rounded-2xl object-contain"
                />
              </div>
            ))}
          </div>

          {/* Layer 3: Center column top and bottom */}
          <div
            ref={layer3Ref}
            className="grid col-span-full row-span-full"
            style={{
              gridTemplateColumns: 'subgrid',
              gridTemplateRows: 'subgrid',
              gridColumn: '1 / -1',
              gridRow: '1 / -1',
            }}
          >
            {layer3Images[0] && (
              <div className="flex items-center" style={{ gridColumn: 3, gridRow: 1 }}>
                <img
                  src={layer3Images[0]}
                  alt=""
                  className="w-full rounded-2xl object-contain"
                />
              </div>
            )}
            {layer3Images[1] && (
              <div className="flex items-center" style={{ gridColumn: 3, gridRow: 3 }}>
                <img
                  src={layer3Images[1]}
                  alt=""
                  className="w-full rounded-2xl object-contain"
                />
              </div>
            )}
          </div>

          {/* Center scaler image */}
          <div
            ref={scalerContainerRef}
            className="relative z-10"
            style={{ gridArea: '2 / 3', aspectRatio: '1/1' }}
          >
            <img
              ref={scalerImgRef}
              src={centerImage}
              alt="Pi Labs"
              className="object-contain"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageEnding;
