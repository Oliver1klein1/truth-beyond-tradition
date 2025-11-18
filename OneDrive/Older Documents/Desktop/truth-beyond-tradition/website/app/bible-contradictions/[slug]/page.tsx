import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getContradictionBySlug } from "@/lib/contradictions";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { slug: "jehoiachin-age" },
    { slug: "jesus-lineage" },
    { slug: "royal-disqualification" },
    { slug: "father-of-joseph" },
    { slug: "father-of-shelah" },
    { slug: "absalom" },
    { slug: "demoniacs" },
    { slug: "famine" },
    { slug: "flight-to-egypt" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const contradiction = getContradictionBySlug(params.slug);
  
  if (!contradiction) {
    return {
      title: "Contradiction Not Found",
    };
  }

  return {
    title: `Contradiction ${contradiction.number}: ${contradiction.title} | Truth Beyond Tradition`,
    description: `Bible Contradiction ${contradiction.number} - ${contradiction.title}. From the book "101 Illustrated Bible Contradictions".`,
  };
}

export default function ContradictionPage({
  params,
}: {
  params: { slug: string };
}) {
  const contradiction = getContradictionBySlug(params.slug);

  if (!contradiction) {
    notFound();
  }

  // Convert markdown-style formatting to HTML
  const formatContent = (text: string) => {
    const paragraphs = text.split(/\n\n/).filter((p) => p.trim());
    
    return paragraphs
      .map((paragraph) => {
        // Check if this paragraph should be a blockquote (quoted text, usually short)
        const trimmed = paragraph.trim();
        if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length < 100) {
          const quoteText = trimmed.replace(/^"/, "").replace(/"$/, "");
          return `<blockquote class="border-l-4 border-cyan-500 pl-6 my-6 italic text-gray-400 text-xl">${quoteText}</blockquote>`;
        }
        
        // Convert **bold** to <strong>
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        // Convert *italic* to <em> (but not if it's part of **bold**)
        paragraph = paragraph.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>");
        return `<p class="mb-4 text-justify">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Book Cover */}
        <div className="mb-12 text-center">
          <img
            src="/bible-contradictions-cover-final.jpg"
            alt="101 Illustrated Bible Contradictions"
            className="max-w-xs mx-auto rounded-lg shadow-xl mb-8"
          />
        </div>

        {/* Contradiction Number */}
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
          Contradiction Number {contradiction.number}
        </h1>

        {/* Contradiction Image */}
        <div className="mb-12 text-center">
          <img
            src={contradiction.image}
            alt={contradiction.title}
            className="max-w-2xl mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Content */}
        <div
          className="mb-12 text-gray-300 leading-relaxed text-lg text-justify"
          dangerouslySetInnerHTML={{ __html: formatContent(contradiction.content) }}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/bible-contradictions"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Contradictions
          </Link>
          <Link
            href="/books"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get the Full Book
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

