import React from 'react';
import Header from './Header'; // Correct default import
import Footer from './Footer'; // Correct default import

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout; // Ensure default export