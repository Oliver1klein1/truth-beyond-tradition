import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const videos = [
  {
    id: "1",
    thumbnail: "/thumbnail01.jpg",
    title: "Baby Bible Teacher Episode 1",
    description: "Your smallest Bible teacher with the biggest truth!",
  },
  {
    id: "2",
    thumbnail: "/thumbnail02.jpg",
    title: "Baby Bible Teacher Episode 2",
    description: "Learning about Jesus' true message",
  },
  {
    id: "3",
    thumbnail: "/thumbnail3.jpg",
    title: "Baby Bible Teacher Episode 3",
    description: "Understanding the Father's love",
  },
  {
    id: "4",
    thumbnail: "/thumbnail4.jpg",
    title: "Baby Bible Teacher Episode 4",
    description: "Breaking down fear-based theology",
  },
  {
    id: "5",
    thumbnail: "/thumbnail5.jpg",
    title: "Baby Bible Teacher Episode 5",
    description: "Rediscovering truth",
  },
  {
    id: "6",
    thumbnail: "/thumbnail7.jpg",
    title: "Baby Bible Teacher Episode 7",
    description: "More insights from your smallest teacher",
  },
];

export default function BabyBibleTeacherPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Baby Bible Teacher
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Your smallest Bible teacher with the biggest truth!
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Watch as Baby Bible Teacher breaks down complex theological concepts
            in simple, shareable videos that challenge traditional interpretations
            and reveal the heart of Jesus' message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/baby-bible-teacher/episode-${video.id}`}
              className="group relative overflow-hidden rounded-lg aspect-video bg-gray-900 hover:scale-105 transition-transform"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                ▶
              </div>
            </Link>
          ))}
        </div>

        {/* Submit Question Form */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center gradient-text">
            Submit Your Baby Bible Teacher Question
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Have a question you'd like Baby Bible Teacher to answer? Submit it below
            and it might become the topic of a future video!
          </p>
          <form className="max-w-2xl mx-auto">
            <textarea
              placeholder="What would you like Baby Bible Teacher to explain?"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 mb-4"
              rows={4}
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Question
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

