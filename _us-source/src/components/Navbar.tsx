import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import icon from "@/assets/olivar-icon-nobg.png";

const navLinks = [
  { label: "How It Works", href: "#method" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "#0f2e23" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/dumpster" aria-label="Olivar Scale Jobs" className="flex items-center gap-2.5">
          <img src={icon} alt="Olivar Scale Jobs" className="h-10 md:h-12" />
          <span className="text-white font-bold text-sm md:text-base leading-tight tracking-widest uppercase">
            Olivar Scale Jobs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Apply Now
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <a
            href="#book"
            className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/90 transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
