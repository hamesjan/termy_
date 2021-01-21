import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./home.module.css";
import TerminalChallenge from "../terminal_challenge/TerminalChallenge";
import logo from "../../assets/images/termylogo.png";

// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Aux>
      <div className={classes.Home}>
        <img src={logo} alt="logo"></img>
        <TerminalChallenge to="/challenge1" num="1"/>
        <div className={classes.logo}></div>
        <TerminalChallenge to="/challenge2" num="2"/>

      </div>
    </Aux>
  );
};

export default Home;
