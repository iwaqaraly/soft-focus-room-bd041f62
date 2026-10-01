import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} CozzyAbode</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <a href="mailto:cozyyspace001@gmail.com" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
