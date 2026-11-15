import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "Does Kumar Construction take on turnkey projects outside Ranchi across Jharkhand?",
      answer: "Yes, absolutely. While our corporate headquarters is based in Ranchi at 301, Prathna Heights, Ratu Road Chowk, our engineering operations span the entire state of Jharkhand — including Jamshedpur, Bokaro Steel City, Dhanbad, Ramgarh, and Hazaribagh. We execute turnkey commercial business plazas, luxury residential towers, and heavy industrial logistics corridors, alongside masterplanning advisory for select interstate infrastructure developments."
    },
    {
      question: "What is the payment structure and milestone schedule for projects?",
      answer: "Kumar Construction operates on a 100% transparent, milestone-linked escrow payment framework. Payments are strictly mapped to verified construction stages — such as Geotechnical Testing & Foundation, Ground-Floor RCC Casting, Superstructure Slab Handover, Brickwork & MEP Rough-Ins, and Final Handover. Clients release subsequent funds only after on-site milestone delivery and third-party NABL lab quality clearance."
    },
    {
      question: "How do clients receive on-site progress updates and material testing reports?",
      answer: "We maintain institutional transparency throughout execution. Clients receive weekly high-definition photo documentation, drone progression footage, and certified material inspection certificates. These include Primary Fe 550D TMT tensile test results, RMC concrete cube compressive strength tests (M30–M45 grade), and anti-termite/waterproofing certifications delivered via our client desk and WhatsApp portal."
    },
    {
      question: "Is there post-handover structural maintenance and warranty support provided?",
      answer: "Yes. Every turnkey project delivered by Kumar Construction includes comprehensive structural stability certification, waterproofing warranties, and a post-handover defect liability maintenance contract. Over the initial 12 to 24 months, our civil engineering maintenance cell conducts periodic structural audits and preventive inspections to ensure enduring structural longevity."
    },
    {
      question: "How can we schedule a site visit or preliminary development consultation?",
      answer: "You can schedule an in-person meeting at our Ranchi corporate headquarters (301, Prathna Heights, Ratu Road Chowk) or book an on-site geotechnical and development feasibility inspection. To connect directly with Founder & Managing Director Praful Kumar Sahu's executive desk, reach our phone desk at +91 90712 79996 or submit an inquiry through our Contact page."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-dark dark:text-gold font-semibold mb-1.5 font-mono">
          Questions &amp; Answers
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-950 dark:text-white mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
          Common queries regarding turnkey civil engineering, milestone payments, material testing, and infrastructure execution across Jharkhand.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-[#0D0D0D] border-gold/60 dark:border-gold/50 shadow-lg shadow-gold/5'
                  : 'bg-white/60 dark:bg-[#0A0A0A] border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 px-5 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-gold text-black'
                        : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 group-hover:text-gold-dark dark:group-hover:text-gold'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-serif font-medium transition-colors ${
                      isOpen
                        ? 'text-gray-950 dark:text-white'
                        : 'text-gray-800 dark:text-gray-200 group-hover:text-gold-dark dark:group-hover:text-gold'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-gold/15 text-gold-dark dark:text-gold'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <ChevronDown size={17} />
                </div>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed border-t border-gray-100 dark:border-white/5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Quick Help Strip */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-[#0D0D0D] dark:via-[#111111] dark:to-[#0D0D0D] border border-gray-200 dark:border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 text-gold-dark dark:text-gold flex items-center justify-center shrink-0">
            <HelpCircle size={22} />
          </div>
          <div>
            <h4 className="text-sm font-serif font-semibold text-gray-950 dark:text-white">
              Have specific site or land questions?
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
              Speak directly with our senior engineering team in Ranchi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="px-4 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-gold/20"
          >
            Ask a Question
          </Link>
          <a
            href={`tel:${companyInfo.phone}`}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-white/15 hover:border-gold text-gray-700 dark:text-gray-300 hover:text-gold transition-colors"
            title="Call Phone Desk"
          >
            <PhoneCall size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
