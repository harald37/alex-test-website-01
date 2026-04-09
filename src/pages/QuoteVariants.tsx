import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const QUOTE_TEXT = "Ich fange die Momente ein, die euren Tag unvergesslich machen. Ungestellt, ehrlich und mit einem Auge für das besondere Detail.";

const VariantWrapper = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={cn("flex flex-col gap-4 p-8 border border-zinc-100 rounded-xl bg-white", className)}>
    <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-400">{title}</span>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const QuoteVariants = () => {
  return (
    <div className="min-h-screen bg-zinc-50 py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-24 text-center">
          <h1 className="font-serif italic text-4xl md:text-6xl text-zinc-900 mb-6">Zitat-Hervorhebungen</h1>
          <p className="text-zinc-500 font-sans tracking-wide">30 verschiedene Varianten für die Zitat-Präsentation</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Minimal Line Top */}
          <VariantWrapper title="01. Minimal Line Top">
            <div className="text-center">
              <div className="w-12 h-[1px] bg-zinc-900/20 mx-auto mb-8"></div>
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 2. Thin Border Box */}
          <VariantWrapper title="02. Thin Border Box">
            <div className="border border-zinc-200 p-8 text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 3. Left Accent Line */}
          <VariantWrapper title="03. Left Accent Line">
            <div className="border-l-2 border-zinc-900 pl-8 py-2">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 4. Subtle Background */}
          <VariantWrapper title="04. Subtle Background">
            <div className="bg-zinc-100 p-10 rounded-2xl text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 5. Quote Icon Top */}
          <VariantWrapper title="05. Quote Icon Top">
            <div className="text-center">
              <Quote className="w-6 h-6 text-zinc-300 mx-auto mb-6" />
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 6. Brackets */}
          <VariantWrapper title="06. Brackets">
            <div className="flex gap-4 items-center">
              <span className="text-4xl font-serif text-zinc-200">[</span>
              <p className="font-serif italic text-xl text-center text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
              <span className="text-4xl font-serif text-zinc-200">]</span>
            </div>
          </VariantWrapper>

          {/* 7. Double Line Top/Bottom */}
          <VariantWrapper title="07. Double Line Top/Bottom">
            <div className="border-y border-zinc-100 py-10 text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 8. Large Background Quote */}
          <VariantWrapper title="08. Large Background Quote">
            <div className="relative p-8 text-center">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-serif text-zinc-50 -z-0 select-none">"</span>
              <p className="relative z-10 font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 9. Dashed Border */}
          <VariantWrapper title="09. Dashed Border">
            <div className="border border-dashed border-zinc-300 p-8 rounded-xl text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 10. Soft Shadow Card */}
          <VariantWrapper title="10. Soft Shadow Card">
            <div className="bg-white shadow-xl shadow-zinc-200/50 p-10 rounded-3xl text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 11. Vertical Centered Line */}
          <VariantWrapper title="11. Vertical Centered Line">
            <div className="flex flex-col items-center gap-8">
              <div className="w-[1px] h-12 bg-zinc-900/10"></div>
              <p className="font-serif italic text-xl text-center text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
              <div className="w-[1px] h-12 bg-zinc-900/10"></div>
            </div>
          </VariantWrapper>

          {/* 12. Floating with Dots */}
          <VariantWrapper title="12. Floating with Dots">
            <div className="relative p-10 text-center">
              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-zinc-200"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-zinc-200"></div>
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 13. Dark Mode Inverted */}
          <VariantWrapper title="13. Dark Mode Inverted" className="bg-zinc-900 border-none">
            <div className="p-8 text-center">
              <p className="font-serif italic text-xl text-white/90 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 14. Glassmorphism Style */}
          <VariantWrapper title="14. Glassmorphism Style" className="bg-zinc-100/50 backdrop-blur-sm">
            <div className="border border-white/40 p-10 rounded-2xl shadow-sm text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 15. Asymmetric Corners */}
          <VariantWrapper title="15. Asymmetric Corners">
            <div className="border border-zinc-200 p-10 rounded-tl-[60px] rounded-br-[60px] text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 16. Label on Border */}
          <VariantWrapper title="16. Label on Border">
            <div className="relative border border-zinc-200 p-10 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-400">Philosophie</span>
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 17. Gradient Text (Subtle) */}
          <VariantWrapper title="17. Gradient Text (Subtle)">
            <div className="text-center">
              <p className="font-serif italic text-xl leading-relaxed bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
                {QUOTE_TEXT}
              </p>
            </div>
          </VariantWrapper>

          {/* 18. Double Border Box */}
          <VariantWrapper title="18. Double Border Box">
            <div className="border-4 border-double border-zinc-200 p-8 text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 19. Skewed Background */}
          <VariantWrapper title="19. Skewed Background">
            <div className="relative p-10 text-center">
              <div className="absolute inset-0 bg-zinc-100 -skew-y-2 -z-0 rounded-xl"></div>
              <p className="relative z-10 font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 20. Minimal Brackets (Small) */}
          <VariantWrapper title="20. Minimal Brackets (Small)">
            <div className="text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">
                <span className="text-zinc-300 mr-2">/</span>
                {QUOTE_TEXT}
                <span className="text-zinc-300 ml-2">/</span>
              </p>
            </div>
          </VariantWrapper>

          {/* 21. Card with Top Accent */}
          <VariantWrapper title="21. Card with Top Accent">
            <div className="bg-white border-t-4 border-zinc-900 p-10 shadow-sm text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 22. Dotted Underline */}
          <VariantWrapper title="22. Dotted Underline">
            <div className="text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed mb-6">{QUOTE_TEXT}</p>
              <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-zinc-200"></div>)}
              </div>
            </div>
          </VariantWrapper>

          {/* 23. Wide Spacing Card */}
          <VariantWrapper title="23. Wide Spacing Card">
            <div className="border border-zinc-100 p-16 rounded-full text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed px-8">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 24. Corner Accents */}
          <VariantWrapper title="24. Corner Accents">
            <div className="relative p-10 text-center border border-transparent">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-zinc-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-zinc-300"></div>
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 25. Soft Glow */}
          <VariantWrapper title="25. Soft Glow">
            <div className="relative p-10 text-center">
              <div className="absolute inset-4 bg-zinc-400/10 blur-2xl -z-0 rounded-full"></div>
              <p className="relative z-10 font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 26. Typographic Focus */}
          <VariantWrapper title="26. Typographic Focus">
            <div className="text-center">
              <p className="font-serif italic text-2xl text-zinc-900 leading-loose tracking-tight">
                {QUOTE_TEXT}
              </p>
            </div>
          </VariantWrapper>

          {/* 27. Side Borders Only */}
          <VariantWrapper title="27. Side Borders Only">
            <div className="border-x border-zinc-200 px-10 py-4 text-center">
              <p className="font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 28. Floating Pill */}
          <VariantWrapper title="28. Floating Pill">
            <div className="bg-zinc-50 border border-zinc-200 px-12 py-8 rounded-full shadow-inner text-center">
              <p className="font-serif italic text-lg text-zinc-700 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 29. Subtle Pattern Background */}
          <VariantWrapper title="29. Subtle Pattern Background">
            <div className="relative p-10 text-center overflow-hidden rounded-xl">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '10px 10px' }}></div>
              <p className="relative z-10 font-serif italic text-xl text-zinc-800 leading-relaxed">{QUOTE_TEXT}</p>
            </div>
          </VariantWrapper>

          {/* 30. Modern Minimalist */}
          <VariantWrapper title="30. Modern Minimalist">
            <div className="flex flex-col items-center">
              <p className="font-serif italic text-xl text-center text-zinc-800 leading-relaxed mb-8">{QUOTE_TEXT}</p>
              <div className="w-1 h-1 rounded-full bg-zinc-900"></div>
            </div>
          </VariantWrapper>
        </div>
      </div>
    </div>
  );
};
