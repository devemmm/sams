import React from "react";
import AdminForm from "./sub-components/AdminForm";
import Asidebar from "./sub-components/Asidebar";
import Footer from "./sub-components/Footer";
import Header from "./sub-components/Header";

const Management = () => {
  return (
    <>
      <Header />
      <Asidebar />
      <AdminForm />
      <Footer />
    </>
  );
};

export default Management;
