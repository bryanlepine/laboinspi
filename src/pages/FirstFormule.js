import React from "react";
import { useEffect } from "react";
import PreviewFormules from "../components/PreviewFormules"; // Assurez-vous de corriger le chemin d'accès

import InspirationWedding from "../components/InspirationWedding";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormuleNav from "../components/FormuleNav";
import MyFormModal from "../components/MyFormModal";
import FormuleMessage from "../components/FormuleMessage";
import '../css-styles/Responsive.scss';


const FirstFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
        <Header />
        <InspirationWedding />
       <FormuleMessage/>
        <MyFormModal/>
        <FormuleNav />
      <Footer />
    </div>
  );
};

export default FirstFormule;
