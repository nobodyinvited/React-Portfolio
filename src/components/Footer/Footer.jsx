
import { ExtendedButtonLinks } from "../Header/SocialLinks";

const Footer = () => {
  return (
    <footer className="py-12">
      <div>
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-5xl">Let's work together</h1>
          <p className="text-gray-400 text-xl">
            Find me on these platforms for a deeper look at my qualifications
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-max mx-auto gap-4 py-6 justify-items-center">
          <ExtendedButtonLinks></ExtendedButtonLinks>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
