import Navbar from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[var(--nav-height)]">{children}</main>
    </div>
  );
};

export default PageLayout;
