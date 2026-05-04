import { Link } from "react-router-dom";
import icon from "@/assets/olivar-icon-nobg.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/30 py-4 px-6">
        <div className="container mx-auto flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={icon} alt="Scale Jobs" className="w-8 h-8" />
            <span className="font-bold text-sm font-heading">Scale Jobs</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 9, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/80">

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              Scale Jobs ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business name provided through forms or scheduling tools.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, and IP address collected automatically via analytics tools.</li>
              <li><strong>Communication Data:</strong> Messages or information you send us via contact forms or email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and schedule strategy calls.</li>
              <li>Provide, operate, and improve our marketing services.</li>
              <li>Send relevant follow-up communications about our services (you may opt out at any time).</li>
              <li>Analyze website usage to improve user experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers (such as scheduling platforms and analytics tools) solely to operate our business. These providers are obligated to keep your data confidential and use it only on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Cookies & Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party platforms (e.g., Calendly for scheduling, Google Analytics). We are not responsible for the privacy practices of these third parties. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:contact@olivarscalejobs.com" className="text-primary hover:underline">contact@olivarscalejobs.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">9. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 p-4 rounded-xl border border-border bg-muted/30">
              <p className="font-semibold text-foreground">Scale Jobs</p>
              <p>Email: <a href="mailto:contact@olivarscalejobs.com" className="text-primary hover:underline">contact@olivarscalejobs.com</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30">
          <Link to="/" className="text-primary text-sm hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
