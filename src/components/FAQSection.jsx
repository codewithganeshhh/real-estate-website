import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "Kya Kumar Construction Ranchi ke alawa pure Jharkhand me turnkey projects karti hai?",
      answer: "Haan, bilkul. Hamara corporate head office Ranchi (301, Prathna Heights, Ratu Road Chowk) me sthit hai, par hum pure Jharkhand — jaise Ranchi, Jamshedpur, Bokaro Steel City, Dhanbad, Ramgarh aur Hazaribagh me large-scale commercial complexes, turnkey residential towers, aur heavy industrial logistics parks execute karte hain. Select institutional clients ke liye hum interstate infrastructure & masterplanning advisory bhi deliver karte hain."
    },
    {
      question: "Payment structure kaisa hota hai? (Milestone-based stage payments)",
      answer: "Kumar Construction 100% transparent, milestone-linked escrow payment structure par kaam karta hai. Har payment stage-wise deliverables par mapped hoti hai — jaise Geotechnical Testing & Foundation, Ground-Floor RCC Casting, Superstructure Slab Handover, Brickwork & MEP Rough-Ins, aur Final Finishing/Occupancy. Client ko har milestone par NABL lab test aur third-party structural audit report milne ke baad hi agle phase ki payment release karni hoti hai."
    },
    {
      question: "Client ko site progress aur material testing report kaise milti hai?",
      answer: "Hum complete institutional transparency ensure karte hain. Har project ke client ko weekly high-resolution site progress photos, drone video updates, aur material quality certificates provide kiye jaate hain. Isme Fe 550D primary TMT steel tensile reports, RMC concrete cube compressive strength tests (M30-M45 grade), aur anti-termite/waterproofing certifications shamil hote hain jo dedicated digital dashboard aur WhatsApp desk par directly share hote hain."
    },
    {
      question: "Project handover ke baad structural maintenance aur warranty support milta hai?",
      answer: "Ji haan. Turnkey delivery ke baad Kumar Construction structural stability certificate, waterproofing warranty, aur post-handover defect liability maintenance contract provide karta hai. Handover ke initial 12 se 24 mahine ke dauran hamari civil maintenance cell regular structural audits aur preventive inspections conduct karti hai taaki building ki structural longevity hamesha pristine rahe."
    },
    {
      question: "Naye project ke liye site visit ya direct consultation kaise schedule karein?",
      answer: "Aap hamare corporate headquarters (301, Prathna Heights, Ratu Road Chowk, Ranchi) me physical consultation schedule kar sakte hain ya apni site ke liye preliminary geotechnical feasibility inspection book kar sakte hain. Founder & Managing Director Praful Kumar Sahu ki executive engineering desk se direct connect karne ke liye hamare phone desk (+91 90712 79996) ya Contact inquiry form ke zariye turant jud sakte hain."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-dark dark:text-gold mb-3">
          <Sparkles size={13} />
          <span className="text-[11px] uppercase font-mono tracking-[0.2em] font-semibold">
            Clear &amp; Transparent Answers
          </span>
        </div>
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
