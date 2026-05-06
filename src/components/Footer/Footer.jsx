import { ExtendedButtonLinks } from "../Hero/Button";

const Footer = () => {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Text */}
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-4xl md:text-5xl">
            Let's work together
          </h1>

          <p className="text-gray-400 text-base md:text-xl">
            Find me on these platforms for a deeper look at my qualifications
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 py-8">
          <ExtendedButtonLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
