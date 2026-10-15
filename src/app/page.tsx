import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import CascadeDemo from "@/components/CascadeDemo";
import RSVPDemo from "@/components/RSVPDemo";
import ContractReview from "@/components/ContractReview";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessTimeline from "@/components/ProcessTimeline";
import ConciergeOffer from "@/components/ConciergeOffer";
import FounderStory from "@/components/FounderStory";
import ForPlanners from "@/components/ForPlanners";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <CascadeDemo />
      <RSVPDemo />
      <ContractReview />
      <ComparisonTable />
      <ProcessTimeline />
      <ConciergeOffer />
      <FounderStory />
      <ForPlanners />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
