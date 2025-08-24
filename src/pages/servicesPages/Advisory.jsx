import advisoryPage from "../../assets/advisoryPage.jpg";
import FooterAnimation from "@/components/FooterAnimation";
import ServicesHeader from "@/components/ServicesHeader";

function Advisory() {
  const advisoryServices = [
    {
      title: "Consulting",
      icon: "📋",
      description: (
        <div className="text-justify text-gray-800 tracking-wide  leading-relaxed">
          <p>
            We provide practical and tailored consulting solutions to help
            businesses operate efficiently and in compliance with international
            standards. Our consulting services include:
          </p>
          <ul className="mt-2 list-disc list-outside space-y-2 pl-4 opacity-90">
            <li>
              Accounting & Bookkeeping Systems – setup and advisory as per
              international standards
            </li>
            <li>
              Human Resource Management & Payroll Accounting – ensuring
              compliance and accuracy in employee management
            </li>
            <li>
              Project Management Support – including business proposals,
              projections, and budgeting
            </li>
            <li>
              Tax & Regulatory Consulting – advisory on Income Tax, VAT,
              Customs, and Excise Duty matters
            </li>
          </ul>
          <p className="mt-2">
            With a focus on clarity and efficiency, our consulting services are
            designed to guide you in making informed decisions and achieving
            sustainable growth.
          </p>
        </div>
      ),
    },
    {
      title: "Risk Advisory",
      icon: "📈",
      description: (
        <div className="text-justify text-gray-800 tracking-wide leading-relaxed opacity-90">
          <p>
            We help organizations identify, assess, and manage risks
            effectively, ensuring resilience and sustainable growth. Our risk
            advisory services include:
          </p>
          <ul className="mt-2 list-disc list-outside pl-4 space-y-2">
            <li>
              Operational Risk – evaluating internal processes, systems, and
              controls to minimize disruptions and inefficiencies
            </li>
            <li>
              Regulatory & Compliance Risk – ensuring adherence to applicable
              laws, accounting standards, and regulatory requirements
            </li>
            <li>
              Liquidity & Financial Risk – assessing cash flow management, debt
              obligations, and financial stability to maintain business
              continuity
            </li>
            <li>
              Other Risks – including strategic, reputational, and fraud risks
              that could impact long-term performance
            </li>
          </ul>
          <p className="mt-2">
            Our approach combines proactive risk assessment with practical
            solutions, enabling clients to safeguard their business while
            seizing opportunities for growth.
          </p>
        </div>
      ),
    },
  ];

  const renderedAdvisoryServices = advisoryServices.map((service) => (
    <FooterAnimation key={service.title}>
      <div className="bg-white h-full shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden ">
        <div className=" flex flex-col justify-center w-full">
          <div className="flex items-center w-full bg-gradient-to-br from-[#2B303A] to-gray-700 p-4">
            <span className="text-3xl mr-2">{service.icon}</span>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          </div>

          <div className="text-sm md:text-base text-gray-700 leading-normal px-8 py-6">
            {service.description}
          </div>
        </div>
      </div>
    </FooterAnimation>
  ));

  const titleDescription =
    "At S.B. Thakali & Associates, our advisory services provide clarity, confidence, and actionable strategies for long-term business success. We help organizations navigate risks, optimize performance, and achieve sustainable growth.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
     
      <ServicesHeader
        title="Advisory"
        titleDescription={titleDescription}
        titleImage={advisoryPage}
        header="Services"
      />

      <div className="max-w-4xl md:max-w-5xl mx-auto py-20 space-y-20">
        {renderedAdvisoryServices}
      </div>
    </div>
  );
}

export default Advisory;
