import { Link } from "react-router-dom";
import icon from "@/assets/olivar-icon-nobg.png";

const Footer = () => {
  return (
    <footer className="py-6 px-4" style={{ background: "linear-gradient(135deg, #0f2e23 0%, #0a2418 100%)" }}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <img src={icon} alt="Olivar Scale Jobs" className="h-9 w-auto shrink-0" />
          <span className="text-xs text-white/70">
            <a
              href="/"
              rel="nofollow noopener noreferrer"
              aria-label="© 2022"
              className="text-white/70 hover:text-white/70 cursor-text select-none no-underline"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ©
            </a>{" "}
            2022 Olivar Scale Jobs. All rights reserved.
          </span>
        </div>
        <div className="flex gap-5 text-xs text-white/70">
          <Link to="/privacy-policy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
          <a href="mailto:contact@olivarscalejobs.com" className="hover:text-white transition-colors whitespace-nowrap">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
