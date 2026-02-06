import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-full ${
      isActive 
        ? "text-primary-foreground bg-primary" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 h-[var(--nav-height)] bg-card/95 backdrop-blur-sm border-b border-border/50 z-50 shadow-warm">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <NavLink to="/" className="text-xl font-display tracking-tight text-foreground hover:text-primary transition-colors">
          Interiors
        </NavLink>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/basement" className={navLinkClass}>
            Basement
          </NavLink>
          <NavLink to="/bathroom" className={navLinkClass}>
            Bathroom
          </NavLink>
          <NavLink to="/bedroom" className={navLinkClass}>
            Bedroom
          </NavLink>
          <NavLink to="/garden" className={navLinkClass}>
            Garden
          </NavLink>
          <NavLink to="/kitchen" className={navLinkClass}>
            Kitchen
          </NavLink>
          <NavLink to="/living-room" className={navLinkClass}>
            Living Room
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;