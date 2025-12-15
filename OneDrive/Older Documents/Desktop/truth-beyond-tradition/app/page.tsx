import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArticlesInsightsSection from "@/components/ArticlesInsightsSection";
import FeaturedVideos from "@/components/FeaturedVideos";
import BookSeriesSection from "@/components/BookSeriesSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedVideos />
      <ArticlesInsightsSection />
      <BookSeriesSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}

