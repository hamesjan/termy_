import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import classes from "./Tutorial.module.css";

class Tutorial extends Component {
    render(){
        return (
            <Aux>
                <div className={classes.OuterBox}>
                    <div className={classes.Terminaltext}></div>
                    <div className={classes.InputPlace}>
                        <label className={classes.LabelText}>[Computer Name]:~ tutorial$ </label>
                        <input autofocus="true" className={classes.Input}></input>
                    </div>
                    
                </div>
            </Aux>
        )

    }
}

export default Tutorial;