import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import OriginalSinQuiz from "./Quiz";

export default function OriginalSinMythPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Cover Image */}
        <div className="mb-12">
          <Image
            src="/magazine_09_cover_original_sin.jpg"
            alt="The Original Sin Deception"
            width={800}
            height={1000}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 pb-6 leading-normal gradient-text">
          The Original Sin Deception
        </h1>
        <p className="text-2xl text-gray-400 mb-8 italic text-center">
          Why God Never Held Us Guilty
        </p>

        {/* Billboard Image */}
        <div className="mb-12">
          <Image
            src="/mockup_billboard1-adam.jpg"
            alt="Original Sin Billboard"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Quote Box */}
        <div className="border-l-4 border-cyan-500 pl-6 py-4 my-8 italic text-xl text-gray-200 bg-gray-900 rounded-r-lg">
          "God never held us guilty because Adam & Eve sinned" — Ezekiel 18:20
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-lg max-w-none mb-12" style={{ textAlign: 'justify' }}>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            For centuries, the doctrine of original sin has been the cornerstone of institutional Christianity's control mechanism. 
            It teaches that humanity is inherently flawed, guilty from birth, and in desperate need of salvation through religious intermediaries. 
            <strong>But what if this entire premise is fundamentally flawed?</strong>
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8" style={{ textAlign: 'justify' }}>
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Foundation of Fear
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The revolutionary truth revealed in Ezekiel 18:20 completely dismantles this manufactured guilt: <strong>"The soul who sins is the one who will die. 
              The child will not share the guilt of the parent, nor will the parent share the guilt of the child."</strong>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This isn't just a theological debate—<em>it's about the liberation of human consciousness from centuries of psychological manipulation.</em>
            </p>
            
            {/* Interactive Quiz */}
            <OriginalSinQuiz />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              The Hebrew Truth
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              When we examine the original Hebrew texts, we discover that the concept of inherited guilt is completely absent. The Hebrew understanding 
              of sin (חטא - chata) literally means <strong>"to miss the mark"</strong>—not a permanent stain on the soul, but a correctable error in aim.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The revolutionary implications are staggering: <strong>if humanity isn't fundamentally flawed, then the entire apparatus of religious guilt, 
              shame, and control crumbles.</strong> We don't need to be "saved" from something we never inherited.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white mt-12" style={{ textAlign: 'left' }}>
              Breaking the Chains
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Understanding that original sin is a manufactured doctrine opens the door to authentic spiritual freedom. Instead of beginning from a 
              position of guilt and unworthiness, <strong>we can start from our true nature: powerful, creative beings capable of direct connection 
              with the divine.</strong>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This isn't just theological liberation—<em>it's psychological revolution.</em> When we stop accepting inherited guilt, we stop accepting 
              inherited limitations.
            </p>
          </section>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="rounded-lg overflow-hidden border border-cyan-500/30">
              <img
                src="https://page.gensparksite.com/v1/base64_upload/d5b97fc491083b47ded42ddc693fe0af"
                alt="Truth Beyond Tradition Poster"
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
            by Ansilo Boff. For a comprehensive examination of these ideas with full scriptural evidence and deeper analysis, 
            read the full book.
          </p>
          <a
            href="https://www.ansiloboff.com/books/liberating-humanity"
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

