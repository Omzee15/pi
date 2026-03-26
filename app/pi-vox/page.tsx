'use client';
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { ScrollClockwork } from "@/components/ui/ScrollClockwork";
import { Footer } from "@/components/Footer";

export default function PiVoxPage() {
  const timelineSteps = [
    { title: "Accurate speech to text" },
    { title: "Intelligent transliteration" },
    { title: "Unified output pipeline" },
    { title: "Context-aware translation" },
    { title: "Seamless translation" },
    { title: "Report generator" },
  ];

  const clockworkSlides = [
    {
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=800&fit=crop",
      title: "Speech Recognition",
      description: "Advanced AI-powered transcription that handles multiple languages and accents with exceptional accuracy.",
    },
    {
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=800&fit=crop",
      title: "Speaker Diarization",
      description: "Automatically identify and separate different speakers in audio recordings for clear attribution.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
      title: "Smart Transliteration",
      description: "Convert speech across scripts while preserving meaning, context, and linguistic nuances.",
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=800&fit=crop",
      title: "Real-time Translation",
      description: "Seamless multilingual translation powered by neural networks for instant understanding.",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      title: "Actionable Reports",
      description: "Generate comprehensive intelligence reports from audio data for informed decision-making.",
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
      <ScrollClockwork slides={clockworkSlides} />
      <Footer />
    </div>
  );
}
