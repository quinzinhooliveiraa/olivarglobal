import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/olivar-logo-nobg.png";

const navLinks = [
  { label: "How It Works?", to: "/dumpster#method" },
  { label: "Cases", to: "/dumpster#cases" },
  { label: "Pricing", to: "/dumpster#pricing" },
  { label: "Blog", to: "/dumpster/blog" },
  { label: "FAQ", to: "/dumpster#faq" },
];

const DumpsterNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ background: "#0f2e23" }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/dumpster" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Olivar Scale Jobs"
            className="h-4 md:h-5 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-white/90 hover:text-[#16a34a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/dumpster#book"
            className="bg-white text-[#0f2e23] px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Schedule Your Free Audit
          </Link>
          <Link
            to="/dumpster#book"
            className="bg-[#15803d] text-white px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/dumpster#book"
            className="bg-[#15803d] text-white px-4 py-2 rounded-md text-xs font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-3" style={{ background: "#0f2e23" }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-white/90 py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dumpster#book"
            onClick={() => setOpen(false)}
            className="bg-white text-[#0f2e23] px-5 py-2.5 rounded-md text-sm font-bold text-center mt-1"
          >
            Schedule Your Free Audit
          </Link>
          <Link
            to="/dumpster#book"
            onClick={() => setOpen(false)}
            className="bg-[#15803d] text-white px-5 py-2.5 rounded-md text-sm font-bold text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default DumpsterNavbar;
