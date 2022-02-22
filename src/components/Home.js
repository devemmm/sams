import React, { useEffect } from "react";
import Header from "./sub-components/Header";
import Asidebar from "./sub-components/Asidebar";
import { useNavigate } from "react-router-dom";
import Main from "./sub-components/Main";
import Footer from "./sub-components/Footer";
import { useCookies } from "react-cookie";
import samsApi from "./apis/sams-api";

const Home = () => {
  const [cookies, setCookie] = useCookies('["sams"]');
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.user) {
      navigate("/error", { replace: true });
    } else {
      return fecthSurvey();
    }
  }, []);

  const fecthSurvey = () => {
    fetch(`${samsApi}/survey`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
        } else {
          setCookie("surveys", JSON.stringify(res.data), { path: "/" });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {cookies.user ? (
        <div>
          <Header />
          <Asidebar />
          <Main />
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Home;
