import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntm9ytl",
        "template_szzoag7",
        form.current,
        {
          publicKey: "IZPY0hqAUPptT2MKR",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setTimeout(() => {
            setStatus("");
          }, [3000]);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 uppercase text-white">
        Get in Touch
      </h2>
      {status && <p className="mt-2 text-green-600">{status}</p>}
      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        <div>
          <input
            type="text"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-b-[#C9EC51] placeholder-gray-400 "
            placeholder="Full Name"
            name="name"
            required
          />
        </div>

        <div>
          <input
            type="email"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-b-[#C9EC51] placeholder-gray-400"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>

        <div>
          <textarea
            rows="4"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-b-[#C9EC51] placeholder-gray-400"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#C9EC51] text-black font-semibold px-4 py-2 rounded-full hover:bg-[#B7D841] transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
