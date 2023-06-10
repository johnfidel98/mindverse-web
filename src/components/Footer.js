import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pt-8 pb-6 text-sm text-center md:text-left fade-in md:flex md:flex-row">
      <span className="text-gray-500 no-underline hover:no-underline hidden md:block">&copy; MindVerse 2023</span>
      <span className="flex flex-col md:flex-row">
        <Link className="ml-4 mr-4" href="/privacy-policy" >
          <span className="text-gray-600 no-underline hover:no-underline">Privacy Policy</span>
        </Link>
        <Link href="/terms-and-conditions">
          <span className="text-gray-600 no-underline hover:no-underline">Terms & Conditions</span>
        </Link>
      </span>
      <div className="text-gray-500 text-sm md:hidden mt-2">&copy; MindVerse 2023</div>
    </div>
  );
};

export default Footer;
