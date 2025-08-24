import advisory from "../../assets/advisory.jpg";
import tax from "../../assets/tax.jpg";
import audit from "../../assets/audit.jpg";
import legal from "../../assets/legal.jpg";
import FooterAnimation from "@/components/FooterAnimation";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ServicesSection() {
  const services = [
    {
      title: "Advisory",
      imageUrl: advisory,
      description:
        "Incisive, tailored advice – from a team that understands you and your business.",
    },
    {
      title: "Audit & Assurance",
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

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <FooterAnimation>
              <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to meet your business
              and personal needs
            </p>
          </div>
        </FooterAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FooterAnimation key={index}>
              <div
                className="bg-cover bg-center rounded-2xl max-h-80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              >
                <div className="bg-black/40 backdrop-blur-sm p-12 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <NavLink
                      to={`./services/${service.title}`}
                      className="text-[#C9EC51] font-semibold hover:text-white cursor-pointer flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </FooterAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
