import founder from "../../assets/founder.jpg";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterAnimation from "@/components/FooterAnimation";
import { FaLinkedin } from "react-icons/fa";

function MeetOurFounder() {
  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      

      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text="Meet Our Founder"
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

      <div className="bg-white py-8 md:px-28 px-6">
        <div className="flex flex-col items-start gap-12 ">
          <div className="flex items-center gap-8">
            <FooterAnimation>
              <img
                src={founder}
                alt="Founder"
                className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full shadow-md"
              />
            </FooterAnimation>
            <div>
              <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-wider">
                  CA Samip Bharti Thakali
                </h1>
              </BoxReveal>
              <p className="text-gray-500 italic mt-2">
                Proprietor – S.B. Thakali & Associates <br />
                Chartered Accountant | Tax & Advisory Expert | NFRS Specialist
              </p>

              <a
                href="https://www.linkedin.com/in/samip-thakali-2407162a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-2"
              >
                <FaLinkedin size={20} /> Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-[#C9EC51] rounded-xl px-8 py-4">
            <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
              <p className="text-gray-700 leading-relaxed">
                CA Samip Bharti Thakali is the Founder and Proprietor of
                <strong> S.B. Thakali & Associates</strong>, a professional
                audit and advisory firm dedicated to delivering quality and
                compliance-driven services across Nepal. With over a decade of
                experience in the field of finance and accounting, he
                specializes in accounting, taxation, business advisory, and the
                implementation of Nepal Financial Reporting Standards (NFRS).
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
              <p className="text-gray-700 leading-relaxed">
                He is a qualified Chartered Accountant from the{" "}
                <strong>
                  Institute of Chartered Accountants of Nepal (ICAN)
                </strong>{" "}
                and holds a Bachelor’s degree from{" "}
                <strong>Tribhuvan University</strong>. His professional journey
                includes advising clients across multiple industries.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
              <h4 className="font-semibold text-gray-800 mb-2">
                Core Areas of Expertise:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Financial Accounting & Reporting</li>
                <li>NFRS Implementation and Compliance</li>
                <li>Tax Planning, VAT & TDS Advisory</li>
                <li>Statutory & Internal Audits</li>
                <li>Company Registration & Legal Compliance</li>
                <li>Business Restructuring & Due Diligence</li>
                <li>Strategic Financial Consulting</li>
              </ul>
            </BoxReveal>

            <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
              <p className="text-gray-700 leading-relaxed">
                CA Samip Bharti Thakali is known for his ethical practice,
                attention to detail, and practical approach to solving business
                and financial challenges. Under his leadership,
                <strong> S.B. Thakali & Associates</strong> continues to grow as
                a trusted partner for businesses seeking reliable and
                professional financial services.
              </p>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurFounder;
