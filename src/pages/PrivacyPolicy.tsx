import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-light text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: August 2026</p>
        </header>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>
            This application ("the App") is a personal tool built and used solely by its developer to manage their own Pinterest account activity, including reading trend and analytics data, and creating or scheduling Pins on their own behalf.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Data Collection and Use</h2>
            <p className="mb-3">
              The App accesses only the Pinterest account data belonging to its single developer/user via the Pinterest API, including:
            </p>
            <ul className="list-disc space-y-1.5 pl-6 mb-3">
              <li>Pinterest boards and Pins created by the developer</li>
              <li>Analytics data (impressions, saves, clicks) for the developer's own Pins</li>
              <li>Publicly available Pinterest trend data</li>
            </ul>
            <p>
              The App does not collect, store, sell, or share any data belonging to any other Pinterest user. The App is not intended for use by the general public and has no other end users besides its developer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Data Storage</h2>
            <p>
              Any data retrieved via the Pinterest API is stored only for the developer's personal use in planning and tracking their own content strategy. Data is not shared with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Third-Party Services</h2>
            <p>
              This App uses the official Pinterest API in accordance with Pinterest's Developer Terms of Service and API Terms of Use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
            <p>
              For any questions about this policy, contact:{" "}
              <a href="mailto:cozyyspace001@gmail.com" className="text-primary hover:underline">
                cozyyspace001@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
