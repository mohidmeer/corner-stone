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
import Head from "next/head";



export default function Home() {
  return (
    <>
    <Head>
                <title>{'Hostbuilding'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Hostbuilding'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Hostbuilding'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
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
    
    
    </>
  )
}
