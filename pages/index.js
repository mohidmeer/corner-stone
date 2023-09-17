import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import AppLayout from "@/layouts/AppLayout";



export default function Home() {
  return (
    <AppLayout>
        <TopBar/>
        <Hero/>
        <Projects/>
        <Goal/>
        <Blog/>
        <Testimonials/>
        <Contact/>
        <Pricing/>
        <Footer/>
    </AppLayout>
  )
}
