'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What does pi-labs specialize in?',
    answer: 'pi-labs specializes in AI-driven cybersecurity and digital forensics solutions. Our key offerings include deepfake detection, data fusion and analytics, video and audio forensics, and blockchain-based evidence management—empowering organizations to detect threats, secure evidence, and accelerate investigations with technology.',
  },
  {
    question: 'How does pi-labs help in detecting deepfakes?',
    answer: 'Our deepfake detection platform, Authentify, uses advanced AI to analyze video, audio, and images for signs of manipulation. It supports multi-format analysis and integrates seamlessly into enterprise and law enforcement workflows, ensuring high-accuracy detection of synthetic media before it can cause harm.',
  },
  {
    question: "Who can benefit from pi-labs' AI-powered investigation tools?",
    answer: "pi-labs' solutions are designed for law enforcement agencies, intelligence units, financial institutions, government bodies, and enterprises. Whether it's securing identity verification, preventing fraud, or conducting complex investigations, our tools are tailored for critical use cases across industries.",
  },
  {
    question: 'What makes pi-labs different from other cybersecurity companies?',
    answer: 'pi-labs combines AI innovation with forensic-grade precision. Unlike traditional cybersecurity providers, we offer specialized platforms for deepfake detection, blockchain-based evidence tracking, and audio/video forensic intelligence, making us a trusted partner in safeguarding digital truth and operational integrity.',
  },
  {
    question: 'How does pi-labs ensure the integrity of digital evidence?',
    answer: 'Our solution, Securechain, leverages blockchain to create a tamper-proof chain of custody for digital evidence. It guarantees authenticity from collection to courtroom, making it ideal for legal, forensic, and regulatory environments that require verified and auditable digital records.',
  },
  {
    question: "Can pi-labs' solutions integrate with existing enterprise systems?",
    answer: 'Yes. All pi-labs products are enterprise-ready and API-integrated, designed to work seamlessly with existing workflows. Our tools support rapid deployment, scalability, and easy integration for smooth onboarding and operational use.',
  },
  {
    question: 'How does pi-labs support investigations for law enforcement and intelligence agencies?',
    answer: 'With tools like pi-scout, pi-sense and pi-vox, we empower agencies to analyze vast volumes of structured and unstructured data, detect video tampering, uncover hidden patterns, and generate actionable intelligence—significantly reducing time-to-resolution in high-stakes investigations.',
  },
];

interface FAQItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-foreground pr-8 group-hover:text-[#0065F4] transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about pi-labs and our AI-powered solutions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8">
          {faqData.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
