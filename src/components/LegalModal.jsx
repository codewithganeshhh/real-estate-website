import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { legalPolicies } from '../data/mockData';

export default function LegalModal({ policyKey, onClose }) {
  if (!policyKey || !legalPolicies[policyKey]) return null;

  const policy = legalPolicies[policyKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111111] border border-gold/40 rounded-3xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto shadow-2xl transition-colors duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck size={18} className="text-gold-dark dark:text-gold" />
          <span className="text-[10px] uppercase tracking-widest text-gold-dark dark:text-gold font-bold font-mono">
            Kumar Construction Governance
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-gray-950 dark:text-white mb-2">
          {policy.title}
        </h3>

        <div className="text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed whitespace-pre-line space-y-4 pt-4 border-t border-gray-200 dark:border-white/10">
          {policy.content}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-black bg-gold hover:bg-gold-light transition-all shadow-md shadow-gold/20"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
