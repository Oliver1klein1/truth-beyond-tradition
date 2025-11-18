import Link from "next/link";

export default function BookSeriesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <Link
          href="/books"
          className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-500/10 transition-colors mb-8"
        >
          Read the Book Series
        </Link>
        <div className="mt-8">
          <img
            src="/rediscover_boxed_set_final2.jpg"
            alt="Rediscover Series Boxed Set"
            className="max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

