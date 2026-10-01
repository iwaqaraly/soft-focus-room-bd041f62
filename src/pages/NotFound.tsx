import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-24 max-w-2xl">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
          We couldn't find that page
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The link may be old or mistyped. You can head back to the homepage or pick a room from the menu above.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Back to the homepage
        </Link>
      </section>
    </PageLayout>
  );
};

export default NotFound;
