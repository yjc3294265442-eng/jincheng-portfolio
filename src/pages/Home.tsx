import Navigation from "@/components/Navigation";
import TechBackground from "@/components/TechBackground";
import CursorGlow from "@/components/CursorGlow";
import CreatorDesk from "@/components/CreatorDesk";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Updates from "@/components/Updates";
import Systems from "@/components/Systems";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark">
      <TechBackground />
      <CursorGlow />
      <Navigation />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* 左侧创作者名片 */}
          <CreatorDesk />

          {/* 右侧主内容区 */}
          <main className="flex-1 min-w-0">
            <Hero />
            <ServiceCards />
            <Updates />
            <Systems />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
