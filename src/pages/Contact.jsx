import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import ContactForm from "@/components/ContactForm";
import FooterAnimation from "@/components/FooterAnimation";

function Contact() {
  return (
    <div className="w-full min-h-screen mt-20 ">
      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text="Connect with us"
          className="text-xl md:text-3xl uppercase tracking-widest font-light text-black"
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

      <div className=" text-center text-black flex flex-col items-center space-y-1 py-8 ">
        <p className="text-lg md:text-2xl  tracking-widest font-light mb-8">
          We are located in the heart of Pokhara, ready to welcome you!
        </p>
        <h1 className="text-lg md:text-2xl  tracking-widest font-light">
          S.B. THAKALI & ASSOCIATES
        </h1>
        <p className=" text-xl md:text-xl tracking-wide font-light">
          Newroad, Pokhara
        </p>
        <div>
          <div className="flex flex-col items-start mt-4">
            <p className=" text-base md:text-lg  tracking-wide font-light">
              📧 sbthakaliassociates@gmail.com
            </p>
            <p className=" text-base md:text-lg  tracking-wide font-light">
              📞+977 9817159856
            </p>
          </div>
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="bg-gray-100 ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-16 w-full gap-12 items-center py-12 max-w-7xl mx-auto">
          <div className="p-12 bg-[#374151] rounded-lg shadow-md text-white">
            <FooterAnimation>
              <ContactForm />
            </FooterAnimation>
          </div>

          <div className="h-[400px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8446042011046!2d83.98350637510066!3d28.212033475896984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950052178e5d%3A0x904045c9998b7463!2sS.B.%20THAKALI%20%26%20ASSOCIATES!5e0!3m2!1sen!2snp!4v1755425505749!5m2!1sen!2snp"
              className="w-full h-full rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SB & Associates Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
