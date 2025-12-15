"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/full_logo_black_bg.jpg"
              alt="Truth Beyond Tradition"
              className="h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Home
            </Link>
            <Link
              href="/bible-contradictions"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Contradictions
            </Link>
            <Link
              href="/jesus-vs-yahweh"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Jesus&rsquo; Father vs Yahweh
            </Link>
            <Link
              href="/paul-vs-jesus"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Paul vs Jesus
            </Link>
            <Link
              href="/baby-bible-teacher"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Baby Bible Teacher
            </Link>
            <Link
              href="/articles"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Articles
            </Link>
            <Link
              href="/quotes"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Quotes
            </Link>
            <Link
              href="/books"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-2 py-1 rounded-md hover:bg-cyan-500/10"
            >
              Books
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/bible-contradictions"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Contradictions
            </Link>
            <Link
              href="/jesus-vs-yahweh"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Jesus&rsquo; Father vs Yahweh
            </Link>
            <Link
              href="/paul-vs-jesus"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Paul vs Jesus
            </Link>
            <Link
              href="/baby-bible-teacher"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Baby Bible Teacher
            </Link>
            <Link
              href="/articles"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/quotes"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Quotes
            </Link>
            <Link
              href="/books"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

