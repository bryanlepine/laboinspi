import React from "react";
import { useEffect } from "react";
import PrepareWedding from "../components/PrepareWedding";
import Header from "../components/Header";
import FormuleNav from "../components/FormuleNav";
import Footer from "../components/Footer";
import MyFormModal from "../components/MyFormModal";
import FormuleMessage from "../components/FormuleMessage";
import "../css-styles/Responsive.scss"

const SecondeFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="home-container">
        <Header />
        <PrepareWedding />
        <FormuleMessage/>
        <MyFormModal/>
        <FormuleNav />
    </div>
    <Footer />
    </div>
    
  );
};

export default SecondeFormule;
