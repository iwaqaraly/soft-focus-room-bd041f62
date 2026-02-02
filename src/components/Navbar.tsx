import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[var(--nav-height)] bg-background border-b border-border z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Interiors
        </span>
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/basement"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Basement
          </NavLink>
          <NavLink
            to="/bathroom"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Bathroom
          </NavLink>
          <NavLink
            to="/bedroom"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Bedroom
          </NavLink>
          <NavLink
            to="/garden"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Garden
          </NavLink>
          <NavLink
            to="/kitchen"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Kitchen
          </NavLink>
          <NavLink
            to="/living-room"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-foreground ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`
            }
          >
            Living Room
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
