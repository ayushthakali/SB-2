import ServicePageCard from "@/components/ServicePageCard";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import advisory from "../assets/advisory.jpg";
import tax from "../assets/tax.jpg";
import audit from "../assets/audit.jpg";
import legal from "../assets/legal.jpg";
import CA from "../assets/CA.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterAnimation from "@/components/FooterAnimation";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Advisory",
    imageUrl: advisory,
    description:
      "Incisive, tailored advice – from a team that understands you and your business.",
  },
  {
    title: "Audit and Assurance",
    imageUrl: audit,
    description:
      "Independent insights that bring transparency and confidence, ensuring trust at every stage of your business journey.",
  },
  {
    title: "Legal",
    imageUrl: legal,
    description:
      "Clear, practical legal guidance to safeguard your interests and provide confidence in every decision.",
  },
  {
    title: "Tax",
    imageUrl: tax,
    description:
      "Expert tax planning and compliance support designed to optimize your position and keep you ahead of changing regulations.",
  },
];

const renderedServices = services.map((service) => {
  return (
    <FooterAnimation key={service.title}>
      <NavLink to={`/services/${service.title.toLowerCase()}`}>
        <ServicePageCard
          title={service.title}
          imageUrl={service.imageUrl}
          description={service.description}
        />
      </NavLink>
    </FooterAnimation>
  );
});

function Services() {
  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text="Services"
          className="text-black text-xl md:text-3xl uppercase tracking-widest font-light"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="bg-white grid md:grid-cols-6 items-center py-10 px-6 md:px-28 gap-12">
        <div className="col-span-1 md:col-span-4 space-y-6">
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <h1 className="text-4xl font-semibold tracking-wider mb-2">
              What we offer
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              In today’s fast-paced business world, having trusted expertise at
              your side is more important than ever. At S.B. Thakali &
              Associates, we deliver comprehensive services designed to help
              your business stay ahead. From auditing and assurance to legal
              guidance and strategic tax solutions, we combine professionalism
              with practical insights to ensure your business thrives.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              We take pride in understanding your unique challenges and
              providing solutions that are tailored, actionable, and
              results-driven. Our team works closely with you to ensure
              compliance, optimize performance, and unlock growth opportunities.
              With a focus on integrity, precision, and innovation, we aim to be
              more than advisors—we strive to be your trusted partners in
              success.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              Explore our services below and see how we can empower your
              business to achieve its full potential.
            </p>
          </BoxReveal>
        </div>

        <figure className="col-span-1 md:col-span-2 md:w-full md:h-full">
          <img
            src={CA}
            alt="Chartered Accountant illustration"
            className="w-full h-64 md:h-full object-cover rounded-xl"
          />
        </figure>
      </div>

      <div className=" mx-auto grid gap-12 md:grid-cols-2 px-6 md:px-12 py-16">
        {renderedServices}
      </div>
    </div>
  );
}

export default Services;
