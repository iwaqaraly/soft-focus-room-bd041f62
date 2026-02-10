import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { routeImports } from "@/App";

const preloadMap: Record<string, (() => Promise<unknown>) | undefined> = {
  "/": routeImports.index,
  "/basement": routeImports.basement,
  "/bathroom": routeImports.bathroom,
  "/bedroom": routeImports.bedroom,
  "/garden": routeImports.garden,
  "/kitchen": routeImports.kitchen,
  "/living-room": routeImports.livingRoom,
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/basement", label: "Basement" },
  { to: "/bathroom", label: "Bathroom" },
  { to: "/bedroom", label: "Bedroom" },
  { to: "/garden", label: "Garden" },
  { to: "/kitchen", label: "Kitchen" },
  { to: "/living-room", label: "Living Room" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-full ${
      isActive 
        ? "text-primary-foreground bg-primary" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-base font-medium transition-all duration-300 px-4 py-2.5 rounded-lg ${
      isActive 
        ? "text-primary-foreground bg-primary" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 h-[var(--nav-height)] bg-card/95 backdrop-blur-sm border-b border-border/50 z-50 shadow-warm">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <NavLink to="/" className="text-xl font-display tracking-tight text-foreground hover:text-primary transition-colors">
          Mentifylabs
        </NavLink>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              onMouseEnter={() => preloadMap[item.to]?.()}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-warm px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={mobileNavLinkClass}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={() => preloadMap[item.to]?.()}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;