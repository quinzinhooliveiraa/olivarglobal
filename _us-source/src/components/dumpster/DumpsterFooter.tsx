import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/olivar-icon-nobg.png";

const DumpsterFooter = () => {
  useEffect(() => {
    try { localStorage.setItem("olv_fv", "1"); } catch (e) {}
  }, []);

  return (
    <footer id="contact" className="py-8 px-4 md:px-8 bg-[#0a2418] border-t border-white/5">
      <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Scale Jobs" className="h-5 w-auto object-contain" />
          <span className="text-xs text-white/50 font-semibold tracking-widest uppercase text-center md:text-left">
            <Link
              to="/"
              aria-label="Home"
              className="cursor-text no-underline text-inherit hover:text-inherit focus:outline-none"
              style={{ textDecoration: "none" }}
            >
              ©
            </Link>{" "}
            2025 Scale Jobs. All rights reserved<a
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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <a href="tel:+12132141162" className="hover:text-[#15803d] transition-colors">(213) 214-1162</a>
          <a href="mailto:contact@olivarscalejobs.com" className="hover:text-[#15803d] transition-colors">Contact</a>
          <Link to="/privacy-policy" className="hover:text-[#15803d] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default DumpsterFooter;
