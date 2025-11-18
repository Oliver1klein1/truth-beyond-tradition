import Link from "next/link";

const videos = [
  {
    id: "1",
    thumbnail: "/thumbnail01.jpg",
    title: "Baby Bible Teacher Episode 1",
    href: "/baby-bible-teacher/episode-1",
  },
  {
    id: "2",
    thumbnail: "/thumbnail02.jpg",
    title: "Baby Bible Teacher Episode 2",
    href: "/baby-bible-teacher/episode-2",
  },
  {
    id: "3",
    thumbnail: "/thumbnail3.jpg",
    title: "Baby Bible Teacher Episode 3",
    href: "/baby-bible-teacher/episode-3",
  },
  {
    id: "4",
    thumbnail: "/thumbnail4.jpg",
    title: "Baby Bible Teacher Episode 4",
    href: "/baby-bible-teacher/episode-4",
  },
  {
    id: "5",
    thumbnail: "/thumbnail5.jpg",
    title: "Baby Bible Teacher Episode 5",
    href: "/baby-bible-teacher/episode-5",
  },
];

export default function FeaturedVideos() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
          Featured Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.href}
              className="group relative overflow-hidden rounded-lg aspect-video bg-gray-900 hover:scale-105 transition-transform"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                ▶
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/baby-bible-teacher"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Watch All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}

