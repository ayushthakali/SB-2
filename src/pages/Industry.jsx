import industries from "../assets/industries.jpg";
import ServicesHeader from "@/components/ServicesHeader";
import ServiceCard from "@/components/ServiceCard";
import FooterAnimation from "@/components/FooterAnimation";
import consumer from "../assets/consumer.jpg";
import energy from "../assets/energy.jpg";
import government from "../assets/government.jpg";
import IT from "../assets/IT.jpg";
import healthcare from "../assets/healthcare.jpg";
import tourism from "../assets/tourism.jpg";
import hydropower from "../assets/hydropower.jpg";

function Industry() {
  const industriesElements = [
    {
      title: "Consumer Business",
      description:
        "We support retail, wholesale, and consumer-focused enterprises with tax, audit, and advisory services that improve financial management, ensure compliance, and help businesses adapt to evolving market demands.",
      imageUrl: consumer,
    },
    {
      title: "Energy, Resources & Industrial",
      description:
        "From manufacturing to energy and industrial operations, we assist organizations in addressing regulatory requirements, cost optimization, and sustainable growth strategies.",
      imageUrl: energy,
    },
    {
      title: "Government & Public Sector",
      description:
        "We work with government bodies and public institutions to enhance transparency, accountability, and efficiency, ensuring public resources are managed effectively and responsibly.",
      imageUrl: government,
    },
    {
      title: "IT & Telecommunication",
      description:
        "Our team provides financial, tax, and compliance solutions for IT and telecom businesses, helping them scale sustainably while managing complex regulations and fast-changing technologies.",
      imageUrl: IT,
    },
    {
      title: "Life Sciences & Healthcare",
      description:
        "We assist hospitals, clinics, and life science organizations with compliance, financial planning, and governance, supporting the delivery of reliable healthcare services.",
      imageUrl: healthcare,
    },
    {
      title: "Tourism & Hospitality",
      description:
        "We provide financial advisory, audit, and tax support to hotels, travel companies, and hospitality businesses, enabling them to thrive in a highly competitive and seasonal market.",
      imageUrl: tourism,
    },
    {
      title: "Capital Projects & Infrastructure",
      description:
        "From construction to large-scale infrastructure projects, we deliver financial oversight, risk management, and compliance solutions that ensure projects remain viable and sustainable.",
      imageUrl: hydropower,
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, we recognize that each industry faces unique regulatory, financial, and operational challenges. With our sector-specific expertise, we provide tailored audit, tax, and advisory solutions that help organizations achieve compliance, improve efficiency, and unlock sustainable growth. From established enterprises to emerging sectors, our experience ensures that we deliver insights and strategies aligned with your business environment.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Industries We Serve"
        titleDescription={titleDescription}
        titleImage={industries}
        header="Industries"
      />

      <div className="max-w-4xl md:max-w-5xl mx-auto py-20 space-y-20">
        {industriesElements.map((industry) => (
          <FooterAnimation key={industry.title}>
            <ServiceCard
              title={industry.title}
              imageUrl={industry.imageUrl}
              description={industry.description}
            />
          </FooterAnimation>
        ))}
      </div>
    </div>
  );
}

export default Industry;
