import { Link } from "react-router-dom";
import FooterAnimation from "./FooterAnimation";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2B303A] text-gray-200 pt-12 pb-4">
      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto tracking-wide">
        <FooterAnimation>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-3">Find Us</h3>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C9EC51]" />
              Newroad, Pokhara
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#C9EC51]" />
              +977 9817159856
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#C9EC51]" />
              sbthakaliassociates@gmail.com
            </p>
          </div>
        </FooterAnimation>

        <FooterAnimation delay={0.4}>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Industry", path: "/industry" },
                { name: "About Us", path: "/about/aboutus" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FooterAnimation>

        <FooterAnimation delay={0.8}>
          <div>
            <h2 className="text-lg font-bold mb-3">
              About S.B. THAKALI & ASSOCIATES
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Trusted partners in Accounting, Taxation, Audit, and Business
              Advisory. Delivering professional solutions tailored to your needs
              with integrity and excellence.
            </p>
          </div>
        </FooterAnimation>
      </div>

      <div className="text-gray-500 text-xs border-t border-gray-700 text-center mt-10 pt-4">
        © {new Date().getFullYear()} S.B. Thakali & Associates. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
