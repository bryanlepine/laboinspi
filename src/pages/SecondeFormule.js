import React from "react";
import { useEffect } from "react";
import PrepareWedding from "../components/PrepareWedding";
import Header from "../components/Header";
import FormuleNav from "../components/FormuleNav";
import Footer from "../components/Footer";
import MyFormModal from "../components/MyFormModal";
import FormuleMessage from "../components/FormuleMessage";

const SecondeFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      
        <Header />
        <PrepareWedding />
        <FormuleMessage/>
        <MyFormModal/>
        <FormuleNav />
      
      <Footer />
    </div>
  );
};

export default SecondeFormule;
