import { ExtendedButtonLinks } from "../Hero/Button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 dark:bg-[#252525]">
      <div className="max-w-4xl mx-auto">
        {/* Text */}
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-4xl md:text-5xl text-black dark:text-white">
            Let's work together
          </h1>

          <p className="text-gray-400 dark:text-gray-200 text-base md:text-xl">
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
