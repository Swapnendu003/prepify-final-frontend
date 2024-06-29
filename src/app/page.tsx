import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Hero/Testimonials/Testimonials";
import Timeline from "@/components/Hero/Timeline/Timeline";
import Image from "next/image";

export default function Home() {
  return (

    <div>

  <Hero />
  <Timeline />

<Testimonials />
  
    </div>
  );
}
