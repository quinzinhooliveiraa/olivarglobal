import { Link } from "react-router-dom";
import logo from "@/assets/olivar-logo-nobg.png";

const DumpsterFooter = () => {
  return (
    <footer id="contact" className="py-10 px-4 md:px-8 bg-[#0a2418] border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Olivar Scale Jobs" className="h-4 md:h-5 w-auto object-contain" />
          <span className="text-xs text-white/50 font-semibold tracking-widest uppercase">
            <Link
              to="/"
              aria-label="Home"
              className="cursor-text no-underline text-inherit hover:text-inherit focus:outline-none"
              style={{ textDecoration: "none" }}
            >
              ©
            </Link>{" "}
            2025 Olivar Scale Jobs. All rights reserved<a
              href="/"
              aria-label="."
              rel="nofollow noopener noreferrer"
              className="text-inherit no-underline hover:text-inherit cursor-text select-none"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              .
            </a>
          </span>
        </div>
        <div className="flex gap-6 text-sm text-white/70">
          <a href="mailto:contact@olivarscalejobs.com" className="hover:text-[#15803d] transition-colors whitespace-nowrap">Contact</a>
          <Link to="/privacy-policy" className="hover:text-[#15803d] transition-colors whitespace-nowrap">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default DumpsterFooter;
