import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subheading}>Introduction</h2>
          <p>
            Welcome to our website. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>User Account, Password, and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Services Offered</h2>
          <p>
            We provide a number of Internet-based services through our website, including the sale of customized products such as t-shirts, mugs, gadgets, and accessories.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Privacy Policy</h2>
          <p>
            By using our services, you consent to the collection and use of your personal information as described in our Privacy Policy.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>User Conduct and Rules</h2>
          <p>
            You agree to use the website and services only for lawful purposes and in a manner that does not infringe the rights of others.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Intellectual Property Rights</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of the company and is protected by intellectual property laws.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Termination</h2>
          <p>
            We may suspend or terminate your access to the website if you violate these Terms and Conditions.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    borderRadius: '12px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#333',
  },
  content: {
    maxHeight: 'none', // Remove fixed height for scroll
    overflow: 'visible', // No scrollbar
    paddingRight: '0px',
  },
  section: {
    marginBottom: '25px',
  },
  subheading: {
    fontSize: '1.3rem',
    marginBottom: '12px',
    color: '#222',
  },
  p: {
    color: '#555',
    fontSize: '1rem',
  },
};

export default TermsAndConditions;
