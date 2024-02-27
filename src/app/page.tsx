import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import ShowCards from "@/components/ShowCards";
import Testimonials from "@/components/Testimonials";
import Webinaars from "@/components/Webinaars";


export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <ShowCards />
      
      <Testimonials />
      <Webinaars />
      <Instructors />
    </div>
  );
}
