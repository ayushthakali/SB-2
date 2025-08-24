import ServiceCard from "@/components/ServiceCard";
import advisoryPage from "../../assets/legalservice.jpg";
import FooterAnimation from "@/components/FooterAnimation";
import registration from "../../assets/legal.jpg";
import legaldocument from "../../assets/legaldocument.jpg";
import paperpen from "../../assets/paperpen.jpg";
import ServicesHeader from "@/components/ServicesHeader";

function Legal() {
  const legalServices = [
    { title: "", description: "", imageUrl: registration, onlyImage: true },
    {
      title: "Company Registration",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          We assist clients in the seamless formation of companies,
          partnerships, and other business entities. Our services cover the
          entire registration process with the relevant government bodies,
          ensuring full compliance with the latest legal requirements.
        </p>
      ),
    },
    {
      title: "Company Liquidation",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          Whether due to strategic restructuring or other business decisions, we
          offer expert guidance in the voluntary and legal closure of companies.
          Our team ensures that the process is handled efficiently, minimizing
          legal and financial risks.
        </p>
      ),
    },
    {
      title: "Amendment of Legal Documents",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          Businesses evolve — and so must their legal documents. We support
          companies in making amendments to Memorandum of Association (MoA),
          Articles of Association (AoA), partnership deeds, and other
          foundational documents.
        </p>
      ),
    },
    {
      title: "Share Lagaat (Share Certificate Issuance)",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          We provide services related to the preparation and issuance of Share
          Lagaats (Share Certificates), ensuring accuracy and compliance with
          regulatory requirements for shareholding documentation.
        </p>
      ),
    },
    { title: "", description: "", imageUrl: legaldocument, onlyImage: true },
    { title: "", description: "", imageUrl: paperpen, onlyImage: true },
    {
      title: "Legal Registrations Across Departments",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          Our firm helps businesses with registration and compliance in various
          regulatory bodies and departments like Tax Registration (VAT/PAN),
          Social Security Fund (SSF), Department of Industry (DoI), Office of
          the Company Registrar (OCR), Local level trade/ business licenses and
          more, depending on your sector and specific needs.
        </p>
      ),
    },
    {
      title: "Other Commercial Legal Services",
      description: (
        <p className="text-justify text-gray-800 tracking-wide ">
          We also offer advisory and documentation services related to: Drafting
          and vetting commercial agreements, License and permit applications,
          Regulatory compliance, Legal opinion and due diligence for investments
          and partnerships.
        </p>
      ),
    },
  ];

  const titleDescription =
    "At S.B. Thakali & Associates, we understand that a strong legal foundation is essential for any business to thrive. Our Commercial Law services support businesses at every stage — from incorporation to liquidation, ensuring compliance and sustainable growth.";

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      

      <ServicesHeader
        title="Legal"
        titleDescription={titleDescription}
        titleImage={advisoryPage}
        header="Services"
      />

      <div className="grid md:grid-cols-3 gap-8 mx-auto py-20 px-6 md:px-12 max-w-7xl">
        {legalServices.map((service) => (
          <FooterAnimation key={service.title || service.imageUrl}>
            <ServiceCard
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              className="h-full max-w-sm mx-auto"
              onlyImage={service.onlyImage || false}
            />
          </FooterAnimation>
        ))}
      </div>
    </div>
  );
}

export default Legal;
