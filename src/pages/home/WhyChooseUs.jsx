import { Award, Users, TrendingUp, Shield } from "lucide-react";
import FooterAnimation from "@/components/FooterAnimation";

const features = [
  {
    title: "Certified Experts",
    description:
      "Qualified chartered accountants with extensive industry experience",
    icon: Award,
    bgColor: "bg-blue-600",
    delay: 0.2,
  },
  {
    title: "Trusted Partner",
    description:
      "10+ years of building trust through reliable and transparent services",
    icon: Shield,
    bgColor: "bg-purple-600",
    delay: 0.4,
  },
  {
    title: "Proven Results",
    description:
      "Track record of helping clients achieve their financial objectives",
    icon: TrendingUp,
    bgColor: "bg-green-600",
    delay: 0.6,
  },
  {
    title: "Personal Touch",
    description:
      "Dedicated support and personalized solutions for every client",
    icon: Users,
    bgColor: "bg-orange-600",
    delay: 0.8,
  },
];

function WhyChooseUs() {
  return (
    <FooterAnimation>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose
            <span className="text-[#C9EC51]"> S.B. Thakali & Associates </span>?
          </h2>
          <p className="text-xl opacity-80 mx-auto">
            With a decade of experience and a team of qualified professionals,
            we provide reliable accounting, tax, and advisory services that
            empower businesses to grow with confidence and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FooterAnimation key={index} delay={feature.delay}>
                <div className="text-center group">
                  <div
                    className={`${feature.bgColor} rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </FooterAnimation>
            );
          })}
        </div>
      </div>
    </FooterAnimation>
  );
}

export default WhyChooseUs;
