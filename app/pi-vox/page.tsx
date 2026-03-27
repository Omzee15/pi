'use client';
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { Footer } from "@/components/Footer";

export default function PiVoxPage() {
  const timelineSteps = [
    {
      title: "Accurate speech to text",
      description: "Breaks long-form audio into structured, searchable text across multiple languages with precise timestamps — with special support for Indian languages.",
    },
    {
      title: "Intelligent transliteration",
      description: "Converts native script into Roman script while retaining phonetic accuracy — ideal for investigators unfamiliar with local languages.",
    },
    {
      title: "Unified output pipeline",
      description: "All outputs — transcription, translation, and transliteration — are delivered via a single, easy-to-integrate API.",
    },
    {
      title: "Context-aware multi-language translation",
      description: "Supports translation across Indian and global languages, ensuring accuracy, cultural nuance, and context-sensitive phrasing so messages preserve meaning, tone, and intent.",
    },
    {
      title: "Seamless translation",
      description: "Translates audio content into Hindi and English, preserving tone and context for better comprehension.",
    },
    {
      title: "Report generator",
      description: "Auto-generates downloadable PDFs of processed files for legal documentation and case archiving.",
    },
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
        deviceType="clockwork"
        clockworkVideo="/hero-vox-2.mp4"
        timelineSteps={timelineSteps}
      />
      <Footer />
    </div>
  );
}
