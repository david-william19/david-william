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
            Let&apos;s connect
          </h1>
          <p className="text-center text-white text-sm mb-5">
            Leave message here for offer opportunity or connect with me and let&apos;s work together
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
