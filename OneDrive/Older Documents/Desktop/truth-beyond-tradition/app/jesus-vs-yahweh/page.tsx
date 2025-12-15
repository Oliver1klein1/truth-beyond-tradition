import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    title: "The God Jesus Revealed vs the God of Moses",
    href: "/jesus-vs-yahweh/god-jesus-revealed",
    description: "Understanding the fundamental differences between Jesus' Father and the Old Testament Yahweh",
  },
  {
    title: "Why Jesus Contradicted Torah Again and Again",
    href: "/jesus-vs-yahweh/jesus-contradicted-torah",
    description: "Examining how Jesus Shattered Yahweh's Old Testament law",
  },
  {
    title: "Why Jesus Never Modeled the Violence of Yahweh",
    href: "/jesus-vs-yahweh/jesus-non-violence",
    description: "Comparing Jesus' teachings of love with Yahweh's commands of violence",
  },
  {
    title: "The Greatest Revelation of the Father's Heart",
    href: "/jesus-vs-yahweh/fathers-heart",
    description: "Discovering the true nature of God through Jesus' life and teachings",
  },
];

export default function JesusVsYahwehPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 pb-6 leading-normal gradient-text text-center">
          Jesus&rsquo; Father vs Yahweh Explained Simply
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Exploring the profound differences between the God Jesus revealed and the God described in the Old Testament
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h2 className="text-2xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400">{article.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-semibold">Read article →</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

