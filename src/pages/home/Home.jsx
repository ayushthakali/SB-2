import machhapuchhre from "../../assets/machhapuchhre.jpg";
import { useState, useEffect } from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import Stat from "./Stat";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import FooterAnimation from "@/components/FooterAnimation";
import ContactForm from "@/components/ContactForm";
import FounderSection from "./FounderSection";

function Home() {
  const [autoZoom, setAutoZoom] = useState(true);

  useEffect(() => {
    setAutoZoom((prev) => !prev);
    const interval = setInterval(() => {
      setAutoZoom((prev) => !prev);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      

      <div className="h-screen w-full relative overflow-hidden">
        <img
          src={machhapuchhre}
          alt="Mt Machhapuchhre view from Pokhara"
          className={`h-full w-full object-cover transition-transform duration-7000 ease-in-out ${
            autoZoom ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center text-black max-w-4xl hover:scale-105 ease-in-out duration-1000 transition-transform bg-white/40 p-12 rounded-lg">
            <BlurText
              text="S.B. THAKALI & ASSOCIATES"
              delay={400}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
            />

            <BlurText
              text="Chartered Accountants • Tax Consultants • Financial Advisors"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-lg md:text-2xl mb-8 tracking-wide [animation-delay:2000ms]"
            />

            <BlurText
              text="TRUST • EXPERTISE • EXCELLENCE"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-sm font-medium tracking-widest"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2B303A] to-gray-800 py-20">
        <Stat />
      </div>

      <div className="py-16">
        <AboutSection />
      </div>

      <div className="bg-gray-100">
        <ServicesSection />
      </div>

      <div className="py-20 bg-gradient-to-br from-[#2B303A] to-gray-700 text-white">
        <WhyChooseUs />
      </div>

      <div className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 px-16 w-full gap-12 items-center py-12 max-w-7xl mx-auto">
          <FooterAnimation>
            <div className="p-12 bg-[#374151] rounded-lg shadow-xl text-white">
              <ContactForm />
            </div>
          </FooterAnimation>
          <FounderSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
