export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Mark Benison Mendevil. Built with Next.js,
          Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
