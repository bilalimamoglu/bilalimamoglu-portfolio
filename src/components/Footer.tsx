export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 flex justify-between items-center text-xs text-text-muted">
      <span>© {new Date().getFullYear()} Bilal Imamoglu</span>
      <span>Built with intention in Berlin</span>
    </footer>
  );
}
