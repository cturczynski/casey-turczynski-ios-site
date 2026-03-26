"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" ref={menuRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between gap-3 min-w-0">
        <a
          href="https://www.linkedin.com/in/casey-turczynski/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0 transition-colors"
        >
          <span className="relative flex shrink-0 w-12 h-12">
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 ring-2 ring-slate-200/90 ring-offset-2"
              aria-hidden
            />
            <Image
              src="/casey-profile.png"
              alt="Casey Turczynski"
              width={48}
              height={48}
              className="absolute left-1/2 top-1/2 w-[115%] h-[115%] min-w-[115%] min-h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover object-center"
            />
          </span>
          <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight truncate group-hover:text-slate-600 transition-colors">
            Casey Turczynski
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-8 justify-end min-w-0">
          {/* Desktop: show links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors py-1.5 whitespace-nowrap">
              Services
            </a>
            <a href="#about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors py-1.5 whitespace-nowrap">
              About Me
            </a>
            <a href="#case" className="text-sm text-slate-500 hover:text-slate-900 transition-colors py-1.5 whitespace-nowrap">
              Products & Experience
            </a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors py-1.5 whitespace-nowrap">
              Contact
            </a>
          </div>

          {/* Book a Call - always visible */}
          <a
            href="https://calendly.com/cturczynski97/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-slate-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-sm hover:bg-slate-800 hover:shadow-md transition-all duration-200 shrink-0"
          >
            Book a Call
          </a>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-base text-slate-600 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-base text-slate-600 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              About Me
            </a>
            <a
              href="#case"
              onClick={() => setIsMenuOpen(false)}
              className="text-base text-slate-600 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Products & Experience
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-base text-slate-600 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
