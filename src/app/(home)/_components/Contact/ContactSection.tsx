import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div
      className="w-full"
      style={{
        background:
          "radial-gradient(farthest-side at top, #1dcd9e1c 0%, rgba(25,25,25, 0.6) 100%)",
      }}
    >
      <div className="container mx-auto py-[60px]">
        <div className="rounded-lg p-5 md:max-w-[850px] font-poppins mx-auto">
          <h1 className="text-center font-semibold text-white text-[52px]">
            Let&apos;s work together
          </h1>
          <p className="text-center text-white text-sm mb-5">
            Send message here for offer opportunity and let&apos;s work together
          </p>
          <ContactForm />
          {/* TODO : need make micro interaction for hovering this social media link */}
          {/* social media */}
          <div className="grid md:grid-cols-4 mt-12 text-center">
            <a href="https://www.linkedin.com/in/davidwilliamdacosta" target="_blank">
              <p className="text-white">Twitter / X</p>
            </a>
            <a href="https://www.instagram.com/davdwilliam_" target="_blank">
              <p className="text-white">Instagram</p>
            </a>
            <a href="https://www.linkedin.com/in/davidwilliamdacosta" target="_blank">
              <p className="text-white">Linkedin</p>
            </a>
            <a href="mailto:davidwilldacosta@gmail.com" target="_blank">
              <p className="text-white">Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
