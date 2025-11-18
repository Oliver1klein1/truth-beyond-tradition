import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const books = [
  {
    title: "Escape the Hell Myth",
    cover: "/Escape-the-hell-myth-cover-final.jpg",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    title: "Framing Jesus",
    cover: "/framing-jesus-cover-final.jpg",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    title: "Liberating Humanity",
    cover: "/liberating-humanity-cover.jpg",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    title: "Reality Unveiled",
    cover: "/reality-unveiled-final.jpg",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    title: "Bible Contradictions",
    cover: "/bible-contradictions-cover-final.jpg",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            The &ldquo;Rediscovering Jesus&rsquo; Subverted Teachings And The Father&rsquo;s Love&rdquo; Book Series
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Five powerful books that challenge traditional interpretations and
            reveal the true heart of Jesus' message. Available in paperback,
            hardcover, ebook, and audiobook formats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <Link
              key={book.title}
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="aspect-[2/3] bg-gray-800 overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {book.title}
                </h2>
                <div className="text-cyan-400 text-sm font-semibold">
                  View on AnsiloBoff.com →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://www.ansiloboff.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Available at www.ansiloboff.com
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

