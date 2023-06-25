import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

//for notification purpose
import { Toaster } from "react-hot-toast";

function Layout({ children, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "76vh" }}>
        {children}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Ecommerce App",
};

export default Layout;
