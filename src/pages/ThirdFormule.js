import React from "react";
import { useEffect } from "react";
import AllWedding from "../components/AllWedding";
import Header from "../components/Header";
import FormuleNav from "../components/FormuleNav";
import Footer from "../components/Footer";

const ThirdFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      <div className="HomeWrapper">
        <Header />
        <AllWedding />
        <FormuleNav />
      </div>
      <Footer />
    </div>
  );
};

export default ThirdFormule;
