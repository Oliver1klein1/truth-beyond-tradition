"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openModal = (imageSrc: string, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedAlt("");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4">
      {/* Background accent elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <img
          src="/brand_accent_element04.jpg"
          alt=""
          className="absolute top-20 right-10 w-64 h-64 object-contain"
        />
        <img
          src="/brand_accent_element01.jpg"
          alt=""
          className="absolute bottom-20 left-10 w-48 h-48 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Mockup Cards */}
        <div className="pt-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
              <img
                src="/mockup_billboard3-m-oncross.jpg"
                alt="Billboard Mockup"
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => openModal("/mockup_billboard3-m-oncross.jpg", "Billboard Mockup")}
              />
              <img
                src="/mockup_billboard4-text-altered.jpg"
                alt="Billboard Mockup"
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => openModal("/mockup_billboard4-text-altered.jpg", "Billboard Mockup")}
              />
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
              <img
                src="/mockup 06 bus stop.jpg"
                alt="Bus Stop Mockup"
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => openModal("/mockup 06 bus stop.jpg", "Bus Stop Mockup")}
              />
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
              <img
                src="/mockup_billboard1-adam.jpg"
                alt="Billboard Mockup"
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => openModal("/mockup_billboard1-adam.jpg", "Billboard Mockup")}
              />
              <img
                src="/mockup_billboard2-tort.jpg"
                alt="Billboard Mockup"
                className="w-full h-auto object-contain cursor-pointer"
                onClick={() => openModal("/mockup_billboard2-tort.jpg", "Billboard Mockup")}
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-12 pb-6 leading-normal gradient-text">
          Truth Beyond Tradition
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-gray-300">
          Rediscover the Jesus You Always Knew Was There
        </p>
        <p className="text-lg md:text-xl mb-6 text-gray-400">
          Breaking fear-based theology. Reclaiming the heart of Jesus.
        </p>

        <div className="text-base md:text-lg mb-12 text-gray-300 max-w-4xl mx-auto space-y-4" style={{ textAlign: 'justify' }}>
          <p>
            Welcome to a <strong className="text-white">bold, electric exploration</strong> of awakening in a hyper-digital age. We <strong className="text-white">fearlessly pierce</strong> the veil of <em>inherited dogmas</em> … especially the <strong className="text-white">heavy shackles</strong> of <strong className="text-white">distorted Christianity</strong>. Our <strong className="text-white">golden rule</strong> is to use the teachings of <strong className="text-white">JESUS</strong> as the <em>plumbline</em>.
          </p>
          <p>
            You are invited to <strong className="text-white">question everything</strong> you were taught about God, yourself and reality itself. It feels like standing at the edge of a <em>neon-lit city</em>, <em>circuits buzzing under your skin</em>, as you awaken to the <strong className="text-white">stunning, sometimes uncomfortable truth</strong> of who you really are: a <strong className="text-white">free, powerful creator</strong> meant to rise beyond the <strong className="text-white">fear and control</strong> of <em>outdated beliefs</em>.
          </p>
          <p>
            This content is for brave souls on the cusp of deconstruction and rebirth, drawn by a haunting blend of mystery, rebellion, and profound hope <strong className="text-white">FOR ALL</strong>.
          </p>
          <p>
            Join the revolution of <strong className="text-white">LIBERATED</strong> hearts, discovering our <strong className="text-white">TRUE POTENTIAL</strong> and remembering our <strong className="text-white">CONNECTION WITH THE FATHER / SOURCE</strong>.
          </p>
        </div>

        {/* YouTube Baby Bible Teacher */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 pb-6 text-center gradient-text leading-normal">Baby Bible Teacher</h2>
          <img
            src="/bbt-podcast-studio.png"
            alt="Baby Bible Teacher Podcast"
            className="max-w-xl mx-auto rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
      <ImageModal
        imageSrc={selectedImage || ""}
        alt={selectedAlt}
        isOpen={selectedImage !== null}
        onClose={closeModal}
      />
    </section>
  );
}

