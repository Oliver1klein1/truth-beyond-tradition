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
    id: 6,
    title: "Reclaiming Your Faith",
    cover: "/magazine_06_cover.jpg",
    href: "/articles/reclaiming-faith",
    description: "Moving from fear to freedom",
  },
];

export default function ArticlesInsightsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 pb-6 leading-normal text-center gradient-text">
          Articles & Insights
        </h2>
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
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{article.description}</p>
                <div className="text-cyan-400 text-sm font-semibold">Read article →</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/articles"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

