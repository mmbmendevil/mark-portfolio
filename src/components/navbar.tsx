"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full border border-border/40 bg-surface/40 px-4 sm:px-5 py-2.5 backdrop-blur-xl transition-all duration-300",
            scrolled ? "bg-surface/70 shadow-sm shadow-black/5 dark:border-white/5 dark:bg-black/40" : "bg-transparent border-transparent shadow-none"
          )}
        >
          {/* Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-2 text-sm font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-black transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25">
              M
            </div>
            <span className="hidden sm:inline-block font-bold tracking-tight">Mark Mendevil</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200",
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-[12px] font-bold text-white shadow-[0_2px_8px_-2px_rgba(124,58,237,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_4px_14px_-2px_rgba(124,58,237,0.45)] active:scale-[0.97] sm:flex"
            >
              <FileText className="h-3 w-3" />
              Resume
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:bg-border hover:text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="mt-4 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
