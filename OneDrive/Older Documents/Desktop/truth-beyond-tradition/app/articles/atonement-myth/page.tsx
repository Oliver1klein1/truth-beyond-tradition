import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AtonementMythPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Cover Image */}
        <div className="mb-12">
          <Image
            src="/magazine_08_cover_atonement_myth.jpg"
            alt="The Atonement Myth"
            width={800}
            height={1000}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 pb-6 leading-normal gradient-text">
          The Atonement Myth
        </h1>
        <p className="text-2xl text-gray-400 mb-8 italic text-center">
          Why Jesus Didn't Die for Your Sins
        </p>

        {/* Billboard Image */}
        <div className="mb-12">
          <Image
            src="/mockup_billboard3-m-oncross.jpg"
            alt="Atonement Myth Billboard"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Quote Box */}
        <div className="border-l-4 border-cyan-500 pl-6 py-4 my-8 italic text-xl text-gray-200 bg-gray-900 rounded-r-lg">
          "God never required the murder of Jesus so He could forgive us. He forgives freely."
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-lg max-w-none mb-12" style={{ textAlign: 'justify' }}>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Atonement theology presents God as requiring violence to forgive—a father who can't forgive his children until his other son is tortured 
            to death. <strong>This portrayal contradicts everything Jesus taught about divine love and mercy.</strong>
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8" style={{ textAlign: 'justify' }}>
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Logic of Divine Violence
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Jesus taught that God forgives freely, immediately, and without conditions. <strong>The parable of the prodigal son shows a father who 
              doesn't require payment or punishment—just the son's return home.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Prodigal Son Revelation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Jesus' parable of the prodigal son reveals the true nature of divine forgiveness. The father doesn't require the son to suffer, pay, or be 
              punished by someone else. <em>He simply welcomes him home with joy and celebration.</em>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This parable directly contradicts atonement theology. <strong>If God is like the father in the story, then divine forgiveness is immediate, 
              free, and based on love rather than satisfied justice.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Violence Problem
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Atonement theology makes God the author of the very violence Jesus consistently opposed. It suggests that divine love requires divine violence—<strong>a 
              contradiction that has justified centuries of human violence "in God's name."</strong>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              When we understand that Jesus' death was humanity's violence against God's love—not God's violence against humanity—<em>we can see the crucifixion 
              as revelation rather than transaction.</em>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              Liberation from Transactional Spirituality
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Understanding that atonement theology misrepresents both God and Jesus liberates us from transactional spirituality. <strong>We don't need to 
              "pay" for forgiveness, earn salvation, or satisfy divine justice</strong>—we simply need to accept the love that's already freely given.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This isn't about minimizing Jesus' death but about understanding it correctly—<em>as the ultimate revelation of love, not the ultimate expression 
              of divine violence.</em>
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
                src="https://page.gensparksite.com/v1/base64_upload/d64fb04321086517cef7164c4696a5cf"
                alt="Liberating Humanity"
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
            This article explores themes from "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul" 
            and "Escape the Hell Myth" by Ansilo Boff. For a comprehensive examination of these ideas with full scriptural evidence 
            and deeper analysis, read the full books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ansiloboff.com/books/liberating-humanity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read Liberating Humanity →
            </a>
            <a
              href="https://www.ansiloboff.com/books/escape-the-hell-myth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Read Escape the Hell Myth →
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

