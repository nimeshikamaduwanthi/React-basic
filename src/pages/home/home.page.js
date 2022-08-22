import React from "react";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import "./Home.styles.css";
import { userContext } from "../../context/context";

const HomePage = () => {
  const { githubUser } = React.useContext(userContext);
  const { name } = githubUser;
  return (
    <div>
      <Navbar />
      <p className="margin">home page</p>
      {name}
      <Footer />
    </div>
  );
};

export default HomePage;
