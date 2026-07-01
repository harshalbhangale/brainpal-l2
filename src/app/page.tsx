import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { Pals } from "@/components/site/pals";
import { DayWithOliver } from "@/components/site/day-with-oliver";
import { Money } from "@/components/site/money";
import { Conversation } from "@/components/site/conversation";
import { HowItWorks } from "@/components/site/how-it-works";
import { BrainCircles } from "@/components/site/brain-circles";
import { AuthoritySafety } from "@/components/site/authority-safety";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { ThesisCta } from "@/components/site/thesis-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pals />
        <DayWithOliver />
        <Money />
        <Conversation />
        <HowItWorks />
        <BrainCircles />
        <AuthoritySafety />
        <Testimonials />
        <Faq />
        <ThesisCta />
      </main>
      <Footer />
    </>
  );
}
