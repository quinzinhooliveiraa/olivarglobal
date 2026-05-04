import { Link } from "react-router-dom";
import icon from "@/assets/olivar-logo-nobg.png";

const Footer = () => {
  return (
    <footer className="py-6 px-4" style={{ background: "linear-gradient(135deg, #0f2e23 0%, #0a2418 100%)" }}>
      <div className="container mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-2">
          <img src={icon} alt="Olivar Scale Jobs" className="h-7 w-auto shrink-0" />
          <span className="text-xs text-white/70 text-center sm:text-left">
            <Link
              to="/dumpster"
              aria-label="Owner access"
              className="text-white/70 hover:text-white/70 cursor-text select-none"
              style={{ textDecoration: "none" }}
            >
              ©
            </Link>{" "}
            2022 Olivar Scale Jobs. All rights reserved<a
              href="/"
              aria-label="."
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white/70 cursor-text select-none"
              style={{ textDecoration: "none", color: "inherit" }}
            >.</a>
          </span>
        </div>
        <div className="flex gap-5 text-xs text-white/70">
          <Link to="/privacy-policy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
          <a href="tel:+12132141162" className="hover:text-white transition-colors whitespace-nowrap">(213) 214-1162</a>
          <a href="mailto:contact@olivarscalejobs.com" className="hover:text-white transition-colors whitespace-nowrap">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
