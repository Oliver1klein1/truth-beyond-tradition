import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    title: "Why Paul and Jesus Often Disagree",
    href: "/paul-vs-jesus/disagreements",
    description: "Examining the theological differences between Paul's letters and Jesus' teachings",
  },
  {
    title: "Paul's Romans 13 Problem",
    href: "/paul-vs-jesus/romans-13",
    description: "Understanding how Paul's view of authority conflicts with Jesus' message",
  },
  {
    title: "Why Paul Reinvented Sacrifice",
    href: "/paul-vs-jesus/sacrifice",
    description: "Exploring how Paul reinterpreted Jesus' message about sacrifice",
  },
  {
    title: "Paul's View of Women vs Jesus' View",
    href: "/paul-vs-jesus/women",
    description: "Comparing how Paul and Jesus treated women in their teachings",
  },
];

export default function PaulVsJesusPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 pb-6 leading-normal gradient-text text-center">
          Paul's Theology vs Jesus' Teachings
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          A critical examination of how Paul's theology diverges from Jesus' core message
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

