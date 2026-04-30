import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/olivar-logo-nobg.png";

type NavItem = { label: string; href: string; type: "anchor" | "route" };

const navLinks: NavItem[] = [
  { label: "How It Works?", href: "/dumpster#method", type: "anchor" },
  { label: "Cases", href: "/dumpster#cases", type: "anchor" },
  { label: "Pricing", href: "/dumpster#pricing", type: "anchor" },
  { label: "Blog", href: "/dumpster/blog", type: "route" },
  { label: "FAQ", href: "/dumpster#faq", type: "anchor" },
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
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-white/90 hover:text-[#16a34a] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-[#16a34a] transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="/dumpster#book"
            className="bg-white text-[#0f2e23] px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Schedule Your Free Audit
          </a>
          <a
            href="/dumpster#book"
            className="bg-[#15803d] text-white px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Book Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href="/dumpster#book"
            className="bg-[#15803d] text-white px-4 py-2 rounded-md text-xs font-bold hover:brightness-95 transition-all whitespace-nowrap"
          >
            Book Now
          </a>
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
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white/90 py-1"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white/90 py-1"
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="/dumpster#book"
            onClick={() => setOpen(false)}
            className="bg-white text-[#0f2e23] px-5 py-2.5 rounded-md text-sm font-bold text-center mt-1"
          >
            Schedule Your Free Audit
          </a>
          <a
            href="/dumpster#book"
            onClick={() => setOpen(false)}
            className="bg-[#15803d] text-white px-5 py-2.5 rounded-md text-sm font-bold text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default DumpsterNavbar;
