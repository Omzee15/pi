'use client';
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function PiVoxPage() {
  const timelineSteps = [
    { title: "Accurate speech to text" },
    { title: "Intelligent transliteration" },
    { title: "Unified output pipeline" },
    { title: "Context-aware translation" },
    { title: "Seamless translation" },
    { title: "Report generator" },
  ];

  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <CinematicHero 
        brandName="Pi-Vox"
        logoSrc="/vox_logo.svg"
        tagline1="Multi-language audio"
        tagline2="analytics engine for investigators."
        heroDescription="An advanced AI-powered speech intelligence solution by pi-labs, designed to transcribe, diarize, transliterate, and translate multilingual audio into actionable insights. Built for digital forensics, law enforcement, and national security applications, pi-vox bridges the gap between raw voice data and critical decision-making."
        cardHeading="AI Voice, perfected."
        cardDescription={
          <>
            <span className="text-[#0065F4] font-semibold">Pi-Vox</span> delivers 
            cutting-edge AI voice synthesis with natural intonation, emotional depth, 
            and crystal-clear quality for podcasts, audiobooks, and content creation.
          </>
        }
        metricValue={99}
        metricLabel="Voice Quality"
        ctaHeading="Experience the future."
        ctaDescription="Join creators worldwide who trust Pi-Vox for professional-grade voice synthesis."
        deviceType="laptop"
        timelineSteps={timelineSteps}
      />
    </div>
  );
}
