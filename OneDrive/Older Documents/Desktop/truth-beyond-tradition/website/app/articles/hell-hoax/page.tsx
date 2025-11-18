import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HellHoaxPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Cover Image */}
        <div className="mb-12">
          <Image
            src="/magazine_07_cover_hell_hoax.jpg"
            alt="The Hell Hoax"
            width={800}
            height={1000}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 pb-6 leading-normal gradient-text">
          The Hell Hoax
        </h1>
        <p className="text-2xl text-gray-400 mb-8 italic text-center">
          How Fear Became Christianity's Greatest Weapon
        </p>

        {/* Billboard Image */}
        <div className="mb-12">
          <Image
            src="/mockup_billboard2-tort.jpg"
            alt="Hell Hoax Billboard"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Quote Box */}
        <div className="border-l-4 border-cyan-500 pl-6 py-4 my-8 italic text-xl text-gray-200 bg-gray-900 rounded-r-lg">
          "God never tortures with fire, even if we reject Jesus" — Luke 9:54-55
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-lg max-w-none mb-12" style={{ textAlign: 'justify' }}>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            No doctrine has been more effective at controlling human behavior than the threat of eternal torment. Yet when we examine Jesus' actual 
            teachings, we find a revolutionary rejection of the fear-based spirituality that hell doctrine represents.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8" style={{ textAlign: 'justify' }}>
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              Fear as a Weapon
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The Greek word "Gehenna" that Jesus used referred to a literal garbage dump outside Jerusalem—<strong>not a metaphysical torture chamber.</strong> 
              The transformation of this geographical reference into cosmic terrorism reveals how Jesus' liberating message was hijacked by institutional fear.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              Jesus Rejects Hellfire
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              In Luke 9:54-55, when James and John ask Jesus if they should call down fire from heaven to destroy a Samaritan village, Jesus rebukes them, 
              saying <strong>"You do not know what manner of spirit you are of."</strong> This isn't the response of someone who believes in eternal fire 
              as divine justice.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Jesus consistently taught about a God of boundless mercy, not vindictive torture. <em>The hell doctrine represents the very "manner of spirit" 
              Jesus opposed</em>—the desire to punish rather than heal, to condemn rather than liberate.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Psychological Prison
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Hell doctrine doesn't just threaten future punishment—<strong>it creates present psychological torture.</strong> People live in constant fear, 
              unable to experience the joy and freedom that Jesus promised. This is the real hell: a mind trapped in terror of divine revenge.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Liberation begins when we recognize that <strong>the God Jesus revealed doesn't torture anyone, ever, for any reason.</strong> Divine love doesn't 
              become divine wrath—it remains consistently loving, even toward those who reject it.
            </p>
          </section>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="rounded-lg overflow-hidden border border-cyan-500/30">
              <img
                src="https://page.gensparksite.com/v1/base64_upload/54c0208db0d64157ecee571d823f2d54"
                alt="God Never Held Us Guilty"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-cyan-500/30">
              <img
                src="https://page.gensparksite.com/v1/base64_upload/e9e7b892c08ec5abd7ffea9e94758c17"
                alt="Bible Texts Altered"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gray-900 rounded-lg border border-gray-800 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to Go Deeper?
          </h3>
          <p className="text-gray-400 mb-6">
            This article explores themes from "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love" 
            by Ansilo Boff. For a comprehensive examination of these ideas with full scriptural evidence, linguistic analysis, 
            and deeper exploration, read the full book.
          </p>
          <a
            href="https://www.ansiloboff.com/books/escape-the-hell-myth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Read the Full Book →
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

