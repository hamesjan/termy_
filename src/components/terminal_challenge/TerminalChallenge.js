import React from "react";

import classes from "./TerminalChallenge.module.css";
import {Link} from "react-router-dom";

const TerminalChallenge = (props) => (
  <Link to={props.to}>
    <div className={classes.Last}>
  <div className={classes.Outer}>
          <div>
            <h1 className={classes.Text}>&gt;_</h1>
          </div>
  </div>
  <div className={classes.Spacer}></div>
  <div className={classes.Challenge}> 
  <h1>Challenge {props.num}</h1>
  </div>
  </div>
  </Link>

);

export default TerminalChallenge;
