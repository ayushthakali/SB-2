import ServicesHeader from "@/components/ServicesHeader";
import aboutus from "../../assets/aboutus.jpg";
import hand from "../../assets/handoverhand.jpg";
import values from "../../assets/values.jpg";
import chooseus from "../../assets/chooseus.jpg";
import FooterAnimation from "@/components/FooterAnimation";

function AboutUs() {
  const titleDescription = (
    <div>
      At S.B. Thakali & Associates, we are more than just accountants and
      auditors — we are partners in your growth. Based in Nepal, our firm is
      dedicated to delivering reliable, professional, and forward-looking
      financial and advisory services that empower businesses, organizations,
      and individuals to thrive in a dynamic environment.
      <p className="mt-2">
        With a strong foundation in accounting, taxation, audit, business
        advisory, and NFRS compliance, we aim to be a trusted advisor at every
        stage of your financial journey. Whether you are a startup, an
        established enterprise, or a development organization, we are committed
        to guiding you with clarity, confidence, and integrity.
      </p>
    </div>
  );

  return (
    <div className="w-full min-h-screen mt-20 bg-gray-100">
      <ServicesHeader
        title="Who We Are"
        titleDescription={titleDescription}
        titleImage={aboutus}
        header="About Us"
      />

      <FooterAnimation>
        <div className="bg-gray-100 grid md:grid-cols-6 items-center py-16 md:px-28 gap-12">
          <figure className="col-span-1 md:col-span-2 w-full h-64 md:h-full">
            <img
              src={hand}
              alt="advise giving image"
              className="h-full w-full object-cover rounded"
            />
          </figure>
          <div className="col-span-1 md:col-span-4 space-y-4 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-4">
              Our Mission
            </h1>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              Our mission is to deliver high-quality accounting and advisory
              services built on integrity, professionalism, and excellence. We
              aim to be recognized as a trusted service brand in Nepal, offering
              international-level expertise while addressing the unique needs of
              local businesses and organizations.
            </p>
          </div>
        </div>
      </FooterAnimation>

      <FooterAnimation delay={0.2}>
        <div className="bg-white grid md:grid-cols-6 items-center py-8 md:px-28 gap-12">
          <div className="col-span-1 md:col-span-4 space-y-4 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-4">
              Our Values
            </h1>

            <ul className="list-disc list-outside pl-6 space-y-2 text-base md:text-lg font-light tracking-wide">
              <li>
                <strong>Integrity -</strong> We uphold the highest ethical
                standards in everything we do.
              </li>
              <li>
                <strong>Excellence - </strong>
                We deliver services of the highest quality with attention to
                detail and reliability.
              </li>
              <li>
                <strong>Innovation -</strong> We continuously adapt and bring
                forward-thinking solutions to meet evolving client needs.
              </li>
              <li>
                <strong>Client-Centric Approach - </strong>
                We work alongside our clients, tailoring solutions that fit
                their goals and challenges.
              </li>
              <li>
                <strong>Global Perspective, Local Expertise -</strong> While
                grounded in Nepal, our practices reflect international standards
                and best practices.
              </li>
            </ul>
          </div>
          <figure className="col-span-1 md:col-span-2 w-full h-64 md:h-full">
            <img
              src={values}
              alt="values image"
              className="h-full w-full object-cover rounded"
            />
          </figure>
        </div>
      </FooterAnimation>

      <FooterAnimation>
        <div className="bg-gray-100 grid md:grid-cols-6 items-center py-16 md:px-28 gap-12">
          <figure className="col-span-1 md:col-span-2 w-full h-64">
            <img
              src={chooseus}
              alt="why choose us image"
              className="h-full w-full object-cover rounded"
            />
          </figure>
          <div className="col-span-1 md:col-span-4 space-y-4 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-4 ">
              Why Choose Us?
            </h1>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              We are not just service providers — we are partners in your
              growth. Whether it’s ensuring compliance, optimizing performance,
              or planning for the future, our team blends technical expertise
              with practical insights to support you at every stage of your
              business journey.
            </p>
          </div>
        </div>
      </FooterAnimation>
    </div>
  );
}
export default AboutUs;
