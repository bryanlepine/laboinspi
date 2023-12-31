import React from "react";
import { useEffect } from "react";
import AllWedding from "../components/AllWedding";
import Header from "../components/Header";
import FormuleNav from "../components/FormuleNav";
import Footer from "../components/Footer";
import MyFormModal from "../components/MyFormModal";
import FormuleMessage from "../components/FormuleMessage";

const ThirdFormule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="home-container">
      
        <Header />
        <AllWedding />
        <FormuleMessage/>
        <MyFormModal/>
        <FormuleNav />
      
    </div>
    <Footer />
    </div>
    
  );
};

export default ThirdFormule;
