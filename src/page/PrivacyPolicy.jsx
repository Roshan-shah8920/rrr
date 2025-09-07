// PrivacyPolicy.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">
        <h1 className="text-center mb-3">Privacy Policy</h1>
        <p className="text-center text-muted mb-4">Last updated: August 25, 2025</p>

        <section className="mb-4">
          <h2 className="h5 fw-bold">1. Introduction</h2>
          <p>
            We value your privacy. This Privacy Policy outlines how we collect,
            use, and protect your personal information when you use our website or
            services.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Personal identification (Name, Email, Phone)</li>
            <li className="list-group-item">Usage data (browser type, pages visited, time on site)</li>
            <li className="list-group-item">Cookies and tracking data</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">3. How We Use Your Information</h2>
          <p>We use the data we collect for the following purposes:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">To provide and maintain our services</li>
            <li className="list-group-item">To notify you about changes or updates</li>
            <li className="list-group-item">To provide customer support</li>
            <li className="list-group-item">To monitor usage and improve user experience</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience. You can configure your browser to refuse all cookies or
            indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">5. Third-Party Services</h2>
          <p>
            We may employ third-party companies to facilitate our service, perform
            service-related services, or assist in analyzing usage. These third
            parties have access to your personal data only to perform tasks on our
            behalf and are obligated not to disclose or use it for other purposes.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">7. Your Data Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Access the personal data we hold about you</li>
            <li className="list-group-item">Request correction of any inaccurate data</li>
            <li className="list-group-item">Request deletion of your personal data</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">8. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5 fw-bold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
            <br />
            <strong>Email:</strong> support@example.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
