import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "76vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;