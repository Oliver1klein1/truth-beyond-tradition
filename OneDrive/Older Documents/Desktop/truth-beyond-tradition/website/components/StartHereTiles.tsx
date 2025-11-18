import Link from "next/link";

const tiles = [
  {
    title: "Is Hell Real?",
    href: "/articles/is-hell-real",
    description: "Exploring the truth behind the hell myth",
  },
  {
    title: "Did Jesus worship Yahweh?",
    href: "/jesus-vs-yahweh/did-jesus-worship-yahweh",
    description: "Understanding Jesus' relationship with the Old Testament God",
  },
  {
    title: "Why Paul's message contradicts Jesus' teachings",
    href: "/paul-vs-jesus/contradictions",
    description: "Examining the differences between Paul and Jesus",
  },
  {
    title: "Why the Bible Contradicts Itself",
    href: "/bible-contradictions",
    description: "Discovering the inconsistencies in scripture",
  },
  {
    title: "Did Jesus reject the idea of blood sacrifice?",
    href: "/articles/jesus-blood-sacrifice",
    description: "Reexamining Jesus' view on sacrifice",
  },
  {
    title: "Did Yahweh ever command Human Sacrifice?",
    href: "/articles/yahweh-human-sacrifice",
    description: "Investigating difficult Old Testament passages",
  },
];

export default function StartHereTiles() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                {tile.title}
              </h3>
              <p className="text-gray-400 text-sm">{tile.description}</p>
              <div className="mt-4 text-cyan-400 text-sm font-semibold">
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

