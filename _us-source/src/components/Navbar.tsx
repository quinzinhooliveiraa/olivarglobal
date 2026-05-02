import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "@/assets/olivar-icon-nobg.png";

const navLinks = [
  { label: "How It Works", to: "/#method" },
  { label: "Results", to: "/#results" },
  { label: "FAQ", to: "/#faq" },
  { label: "Blog", to: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "#0f2e23" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={icon} alt="Olivar Scale Jobs" className="h-10 md:h-12" />
          <span className="text-white font-bold text-sm md:text-base leading-tight tracking-widest uppercase">
            Olivar Scale Jobs
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#book"
            className="bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/#book"
            className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/90 transition-all"
          >
            Apply Now
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-3 overflow-hidden"
            style={{ background: "#0f2e23" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white/90 py-1 border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#book"
              onClick={() => setOpen(false)}
              className="bg-white text-primary px-5 py-2.5 rounded-lg text-sm font-bold text-center mt-1"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
