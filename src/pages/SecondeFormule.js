import React from "react";
import { useEffect } from "react";
import PrepareWedding from "../components/PrepareWedding";
import Header from "../components/Header";
import FormuleNav from "../components/FormuleNav";
import Footer from "../components/Footer";

const SecondeFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      <div className="HomeWrapper">
        <Header />
        <PrepareWedding />
        <FormuleNav />
      </div>
      <Footer />
    </div>
  );
};

export default SecondeFormule;
