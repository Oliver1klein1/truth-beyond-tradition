import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Truth Beyond Tradition</h3>
            <p className="text-gray-400 text-sm">
              Rediscovering the Jesus you always knew was there.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bible-contradictions" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Bible Contradictions
                </Link>
              </li>
              <li>
                <Link href="/jesus-vs-yahweh" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Jesus&rsquo; Father vs Yahweh
                </Link>
              </li>
              <li>
                <Link href="/paul-vs-jesus" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Paul vs Jesus
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/baby-bible-teacher" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Baby Bible Teacher
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Quotes Library
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Book Series
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.ansiloboff.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Author Site
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@BabyBibleTeacher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Truth Beyond Tradition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

