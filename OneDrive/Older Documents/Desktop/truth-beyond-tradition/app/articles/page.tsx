import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Start Your Deconstruction Journey",
    cover: "/magazine_01_cover.jpg",
    href: "/articles/deconstruction-journey",
    description: "A guide to beginning your path of rediscovery",
  },
  {
    id: 2,
    title: "Resources and Tools",
    cover: "/magazine_02_cover.jpg",
    href: "/articles/resources-tools",
    description: "Essential resources for your journey",
  },
  {
    id: 3,
    title: "Breaking Free from Fear",
    cover: "/magazine_03_cover.jpg",
    href: "/articles/breaking-free-fear",
    description: "Understanding how fear-based theology distorts truth",
  },
  {
    id: 4,
    title: "The Heart of Jesus",
    cover: "/magazine_04_cover.jpg",
    href: "/articles/heart-of-jesus",
    description: "Rediscovering the true message of love",
  },
  {
    id: 5,
    title: "Faith Unravelled",
    cover: "/magazine_05_cover.jpg",
    href: "/articles/faith-unravelled",
    description: "Why Followers Of Jesus Are Breaking Free",
  },
  {
    id: 7,
    title: "The Original Sin Deception",
    cover: "/magazine_09_cover_original_sin.jpg",
    href: "/articles/original-sin-myth",
    description: "Why God Never Held Us Guilty",
  },
  {
    id: 8,
    title: "The Hell Hoax",
    cover: "/magazine_07_cover_hell_hoax.jpg",
    href: "/articles/hell-hoax",
    description: "How Fear Became Christianity's Greatest Weapon",
  },
  {
    id: 9,
    title: "The Atonement Myth",
    cover: "/magazine_08_cover_atonement_myth.jpg",
    href: "/articles/atonement-myth",
    description: "Why Jesus Didn't Die for Your Sins",
  },
  {
    id: 10,
    title: "Born of a Virgin?",
    cover: "/magazine_06_cover.jpg",
    href: "/articles/virgin-birth-coverup",
    description: "Uncovering A Christianity Cover-up",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 pb-6 leading-normal gradient-text text-center">
          Articles & Insights
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Short-form articles that challenge tradition and reveal truth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="aspect-[3/4] bg-gray-800 overflow-hidden">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{article.description}</p>
                <div className="text-cyan-400 text-sm font-semibold">Read article →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

