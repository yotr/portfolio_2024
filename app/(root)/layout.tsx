import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-28 sm:pt-36">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
