import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import StartHereTiles from "@/components/StartHereTiles";

export default function StartHerePage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Welcome to Truth Beyond Tradition
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            You're here because something doesn't add up. The God you were taught
            about doesn't match the Jesus you read about. You're ready to question
            everything and discover the truth beyond tradition.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start your journey below. Each path leads to deeper understanding,
            freedom from fear, and a rediscovery of the Jesus you always knew
            was there.
          </p>
        </div>

        <StartHereTiles />

        <div className="mt-16 text-center">
          <Link
            href="/books"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mr-4"
          >
            Explore the Book Series
          </Link>
          <Link
            href="/articles"
            className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Read Articles
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

