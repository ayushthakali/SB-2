import { Award, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FooterAnimation from "@/components/FooterAnimation";

function AboutSection() {
  const highlights = [
    { text: "Qualified Chartered Accountants" },
    { text: "10+ Years of Experience" },
    { text: "500+ Satisfied Clients" },
    { text: "Comprehensive Financial Solutions" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FooterAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Trusted Financial Partners
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
            With over 10 years of experience, S.B. Thakali & Associates provides
            comprehensive accounting, tax, and financial advisory services
            across Nepal.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
            Our team of qualified chartered accountants and financial experts is
            committed to delivering personalized solutions that drive growth,
            ensure compliance, and optimize your financial performance.
          </p>
          <div className="flex flex-col space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </FooterAnimation>
       
       <FooterAnimation delay={0.4}>
        <div className="bg-gradient-to-br from-[#2B303A] to-gray-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
          <div className="mb-6">
            <Users className="w-12 h-12 mb-4 text-[#C9EC51]" />
            <h3 className="text-2xl font-bold mb-2 ">Our Mission</h3>
            <p className="opacity-90 text-justify">
              Delivering high-quality accounting and advisory services with
              integrity and professionalism, tailored for Nepali businesses
              while meeting international standards.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <Award className="w-12 h-12 mb-4 text-[#C9EC51]" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="opacity-90 text-justify">
              To be recognized as a trusted service brand in Nepal, offering
              international-level expertise while addressing the unique needs of
              local businesses and organizations
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/about/aboutus"
              className="text-xl font-semibold border-b pb-1 hover:text-[#C9EC51]"
            >
              Read More...
            </Link>
          </div>
        </div>
        </FooterAnimation>
      </div>
    </div>
  );
}

export default AboutSection;
