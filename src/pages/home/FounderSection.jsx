import { Award, Users } from "lucide-react";
import founder from "../../assets/founder.jpg";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import FooterAnimation from "@/components/FooterAnimation";

function FounderSection() {
  return (
    <FooterAnimation>
      <div className="bg-[#374151] rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-[#C9EC51] rounded-full flex items-center justify-center">
              <img
                src={founder}
                alt="CA Samip Bharti Thakali"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
              <Award className="w-4 h-4 text-black" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">CA Samip Bharti Thakali</h3>
            <p className="text-[#C9EC51] text-sm font-semibold">
              Founder & Proprietor
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm opacity-90 leading-relaxed text-justify">
            Leading S.B. Thakali & Associates with 10+ years expertise in
            accounting, taxation, and NFRS implementation. ICAN certified
            professional dedicated to ethical practice.
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#C9EC51]">Expertise:</h4>
              <ul className="space-y-1 opacity-90">
                <li>• Financial Reporting</li>
                <li>• Tax Advisory</li>
                <li>• NFRS Implementation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#C9EC51]">Credentials:</h4>
              <ul className="space-y-1 opacity-90">
                <li>• ICAN Certified</li>
                <li>• 10+ Years Experience</li>
                <li>• 500+ Clients Served</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <NavLink
              to="/about/meetourfounder"
              className="bg-[#C9EC51] hover:bg-[#b8d949] text-[#2B303A] px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Meet Our Founder</span>
            </NavLink>
            <a
              href="https://www.linkedin.com/in/samip-thakali-2407162a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:bg-white/10 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center space-x-2"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </FooterAnimation>
  );
}

export default FounderSection;
