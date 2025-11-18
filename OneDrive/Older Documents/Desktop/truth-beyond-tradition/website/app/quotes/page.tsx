import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const quotes = [
  {
    text: "Jesus never once taught fear as a tool — only love.",
    book: "Liberating Humanity",
    chapter: "Chapter 2",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "The Father's heart is restoration, not destruction.",
    book: "Escape the Hell Myth",
    chapter: "Chapter 5",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "Yahweh's wrath was mistaken for the Father's love.",
    book: "Liberating Humanity",
    chapter: "Chapter 1",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "There is no sugar-coating this: Jesus is openly condemning the very behavior Yahweh displayed. This on its own is clear and damning proof that Yahweh cannot be the Father of Jesus.",
    book: "Liberating Humanity",
    chapter: "Chapter 1 – Jesus' Simple Questions Reveal A Startling Identity",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "The outcome? A soft heart free from guilt, radiating fearless love. Non-selective love. A heart that sees Jesus' teachings—and humanity—in a light that heals and empowers.",
    book: "Liberating Humanity",
    chapter: "Introduction – READ THIS FIRST!",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "It's not about tearing down faith. It's about clearing rubble to find what's real: A FATHER WHO LOVES WITHOUT CONDITIONS. No wrath. No worship of evil in the name of justice.",
    book: "Liberating Humanity",
    chapter: "Introduction – READ THIS FIRST!",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "Which of you, if his son asks for bread, will give him a stone? Or if he asks for a fish, will give him a serpent?",
    book: "Liberating Humanity",
    chapter: "The Snake and Stone Test",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "Let your 'Yes' be yes and your 'No,' no. For whatever is more than these comes from the evil one.",
    book: "Liberating Humanity",
    chapter: "Oaths: From Commanded to Condemned",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "If eternal conscious torment is true, then the gospel isn't good news—it's COSMIC BLACKMAIL. But Jesus never preached blackmail. He preached love that refuses to fail.",
    book: "Escape the Hell Myth",
    chapter: "Introduction – Hell Hath No Fury?",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "The real hellfire wasn't beneath the earth. It was the fear inside believers: the inherited terror that made them doubt love itself. For centuries, that inner fire has done far more damage than any literal flame could.",
    book: "Escape the Hell Myth",
    chapter: "Chapter 1 – The Invention of Eternal Fire",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "You stop negotiating and start trusting. You stop groveling and start resting. You stop trying to deserve love and start daring to believe it has been chasing you all along. That is the moment the cage opens. That is the sound of hell collapsing.",
    book: "Escape the Hell Myth",
    chapter: "Conclusion – Love Wins. Always.",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "If you've seen Me, you've seen the Father. That sentence rewrote theology forever. If anything in Scripture contradicts the compassion of Jesus, it doesn't reveal God: it reveals our misunderstanding of Him.",
    book: "Escape the Hell Myth",
    chapter: "Chapter 2 – Jesus vs. the Punishing God",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "The Father judges no one.",
    book: "Escape the Hell Myth",
    chapter: "Jesus vs. the Punishing God",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "I came to bring fire on the earth, and how I wish it were already kindled!",
    book: "Escape the Hell Myth",
    chapter: "The Fire That Purifies",
    href: "https://www.ansiloboff.com/books/escape-the-hell-myth",
  },
  {
    text: "Don't hold on too tightly to what you may have heard about 'Biblical Inerrancy.' Even a child who flips through these pages can see there are clear errors and inconsistencies. You're going to need to be humble and let the truth take you where it will.",
    book: "101 Illustrated Bible Contradictions",
    chapter: "Introduction",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "That's how you should view these: Opportunities to get at TRUTH. You find yourself getting excited when somebody says 'Here's another mismatch'—that's how contradictions become gifts.",
    book: "101 Illustrated Bible Contradictions",
    chapter: "Introduction",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "Here's the amazing part: I believe there are at least a dozen keys which resolve or clarify over 90% of the contradictions.",
    book: "101 Illustrated Bible Contradictions",
    chapter: "Introduction",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "If the timeline shifts depending on the message being conveyed, it suggests that theology—not chronology—shaped the story's telling.",
    book: "101 Illustrated Bible Contradictions",
    chapter: "The Ascension Timeline Mystery",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "Is God always honest—or is He sometimes strategic in using deception? The Bible says both.",
    book: "101 Illustrated Bible Contradictions",
    chapter: "Does God Lie?",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "If even God's name rollout is fuzzy, what else might be layered, rewritten, or theologically repackaged?",
    book: "101 Illustrated Bible Contradictions",
    chapter: "When Was God's Name First Revealed?",
    href: "https://www.ansiloboff.com/books/bible-contradictions",
  },
  {
    text: "When Jesus performed what we call 'miracles,' he wasn't some cosmic rule-breaker violating natural law. Nope... he was operating at a higher level of it. Think of it like this: while everyone else was playing checkers, Jesus was playing 3D chess at the quantum level where consciousness directly shapes matter.",
    book: "Reality Unveiled",
    chapter: "Chapter 2 – Quantum Reality",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "Your consciousness isn't some lonely prisoner trapped inside your skull, passively recording whatever 'reality' happens to show up. It's a cosmic force that extends into and shapes the quantum field itself, literally manifesting the experiences that become your life. You're not just observing reality... you're creating it!",
    book: "Reality Unveiled",
    chapter: "Chapter 3 – The Observer Effect",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "Understanding is incomplete until it becomes embodiment. Revelation finds its fullness in PRACTISE when truth is not only known, but lived. You were never meant to strive for blessings. You were created to reveal them.",
    book: "Reality Unveiled",
    chapter: "Chapter 9 – Manifesting Miracles",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "You are gods.",
    book: "Reality Unveiled",
    chapter: "You Are Gods",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "The Kingdom of God is within you.",
    book: "Reality Unveiled",
    chapter: "The Kingdom Within",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "Knowing you're a god is one thing. Acting like one... that's where the magic happens.",
    book: "Reality Unveiled",
    chapter: "Manifesting Miracles",
    href: "https://www.ansiloboff.com/books/reality-unveiled",
  },
  {
    text: "Those three verses above? They're Jesus' own words, yet they read like forbidden text in today's Christian landscape. Strip away two thousand years of theological white noise—what emerges is unsettling.",
    book: "Framing Jesus",
    chapter: "Introduction – Erased Fingerprints",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    text: "This wasn't just a missing puzzle piece. This was discovering that the puzzle you've been working on for years has been modified—pieces removed, edges smoothed, the picture subtly altered while you weren't looking.",
    book: "Framing Jesus",
    chapter: "Introduction – Erased Fingerprints",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    text: "BRACE YOURSELF. Because what I discovered will challenge everything you thought you knew about the most famous man who ever lived.",
    book: "Framing Jesus",
    chapter: "Introduction – Erased Fingerprints",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    text: "Father… You are the only true God.",
    book: "Framing Jesus",
    chapter: "Jesus' Own Words",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    text: "The pattern is there, hiding in plain sight like a watermark that only appears when you tilt the page against the light.",
    book: "Framing Jesus",
    chapter: "The Trinity Shift",
    href: "https://www.ansiloboff.com/books/framing-jesus",
  },
  {
    text: "Experience liberation from transactional forgiveness—discover you were never separated, never unloved, never needed to earn what was already yours.",
    book: "Liberating Humanity",
    chapter: "Key Benefits",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
  {
    text: "Discover you were born worthy—no need to prove yourself or earn love through religious performance.",
    book: "Liberating Humanity",
    chapter: "Key Benefits",
    href: "https://www.ansiloboff.com/books/liberating-humanity",
  },
];

const colorClasses = [
  "bg-blue-500/20 border-blue-500/30 hover:border-blue-400/50",
  "bg-blue-600/20 border-blue-600/30 hover:border-blue-500/50",
  "bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-400/50",
  "bg-purple-500/20 border-purple-500/30 hover:border-purple-400/50",
  "bg-purple-600/20 border-purple-600/30 hover:border-purple-500/50",
  "bg-violet-500/20 border-violet-500/30 hover:border-violet-400/50",
  "bg-pink-500/20 border-pink-500/30 hover:border-pink-400/50",
  "bg-fuchsia-500/20 border-fuchsia-500/30 hover:border-fuchsia-400/50",
  "bg-rose-500/20 border-rose-500/30 hover:border-rose-400/50",
];

export default function QuotesPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text text-center">
          Quotes Library
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Powerful insights from the &quot;Rediscover Jesus&apos; Subverted Teachings And The Father&apos;s Love&quot; book series
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => {
            const colorClass = colorClasses[index % colorClasses.length];
            return (
              <div
                key={index}
                className={`p-8 rounded-lg border transition-all ${colorClass}`}
              >
                <blockquote className="text-2xl font-semibold mb-6 text-white">
                  "{quote.text}"
                </blockquote>
                <div>
                  <p className="text-gray-300 text-sm">
                    From <span className="text-cyan-400">{quote.book}</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{quote.chapter}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}

