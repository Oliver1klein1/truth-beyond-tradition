import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const contradictions = [
  {
    id: 1,
    title: "Jehoiachin's Age at Accession",
    description: "Was Jehoiachin 18 or 8 years old when he became king?",
    image: "/books/bible-contradictions/c002-jehoiachin-age.jpg",
    href: "/bible-contradictions/jehoiachin-age",
  },
  {
    id: 2,
    title: "Jesus' Lineage Through David",
    description: "Conflicting genealogies in Matthew and Luke",
    image: "/books/bible-contradictions/c003-jesus-david-lineage.jpg",
    href: "/bible-contradictions/jesus-lineage",
  },
  {
    id: 3,
    title: "Royal Disqualification",
    description: "How can Jesus be the Messiah if his lineage is disqualified?",
    image: "/books/bible-contradictions/c004-royal-disqualification.jpg",
    href: "/bible-contradictions/royal-disqualification",
  },
  {
    id: 4,
    title: "Father of Joseph",
    description: "Conflicting accounts of Joseph's father in the genealogies",
    image: "/books/bible-contradictions/c005-father-of-joseph.jpg",
    href: "/bible-contradictions/father-of-joseph",
  },
  {
    id: 5,
    title: "Father of Shelah",
    description: "Discrepancies in the lineage of Shelah",
    image: "/books/bible-contradictions/c006-father-of-shelah.jpg",
    href: "/bible-contradictions/father-of-shelah",
  },
  {
    id: 6,
    title: "Absalom's Children",
    description: "Conflicting accounts of Absalom's offspring",
    image: "/books/bible-contradictions/c007-absalom.jpg",
    href: "/bible-contradictions/absalom",
  },
  {
    id: 7,
    title: "The Demoniacs",
    description: "Was there one demoniac or two at Gadara?",
    image: "/books/bible-contradictions/c008-demoniacs.jpg",
    href: "/bible-contradictions/demoniacs",
  },
  {
    id: 8,
    title: "The Famine",
    description: "Conflicting accounts of when the famine occurred",
    image: "/books/bible-contradictions/c009-famine.jpg",
    href: "/bible-contradictions/famine",
  },
  {
    id: 9,
    title: "Flight to Egypt",
    description: "Discrepancies in the timeline of Jesus' early life",
    image: "/books/bible-contradictions/c010-flight-to-egypt.jpg",
    href: "/bible-contradictions/flight-to-egypt",
  },
];

export default function BibleContradictionsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text text-center">
          Bible Contradictions
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Exploring the inconsistencies in scripture that challenge traditional interpretations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contradictions.map((contradiction) => (
            <Link
              key={contradiction.id}
              href={contradiction.href}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="aspect-[2/3] bg-gray-800 overflow-hidden">
                <img
                  src={contradiction.image}
                  alt={contradiction.title}
                  className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {contradiction.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{contradiction.description}</p>
                <div className="text-cyan-400 text-sm font-semibold">Read more →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/books"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Want the full illustrated book? → click here
          </Link>
          <div className="mt-8 flex justify-center">
            <img
              src="/bible-contradictions-cover-final.jpg"
              alt="101 Illustrated Bible Contradictions Book Cover"
              className="max-w-md w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

