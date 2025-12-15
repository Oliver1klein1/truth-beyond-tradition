"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const topics = [
  { title: "Bible Contradictions", href: "/bible-contradictions", color: "from-red-500 to-pink-500" },
  { title: "Jesus' Father vs Yahweh", href: "/jesus-vs-yahweh", color: "from-blue-500 to-cyan-500" },
  { title: "Paul's Edits", href: "/paul-vs-jesus", color: "from-purple-500 to-pink-500" },
  { title: "Hell Deconstruction", href: "/articles/hell-deconstruction", color: "from-orange-500 to-red-500" },
  { title: "Old Covenant vs New Heart", href: "/articles/old-covenant-new-heart", color: "from-green-500 to-teal-500" },
  { title: "Trauma-informed Theology", href: "/articles/trauma-informed-theology", color: "from-indigo-500 to-purple-500" },
];

export default function TrendingTopics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
          Trending Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link
              key={topic.href}
              href={topic.href}
              className={`group relative overflow-hidden rounded-lg p-6 bg-gradient-to-br ${topic.color} transition-transform hover:scale-105 ${
                index === currentIndex ? "ring-2 ring-cyan-400" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-white/80 text-sm">Explore →</p>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

