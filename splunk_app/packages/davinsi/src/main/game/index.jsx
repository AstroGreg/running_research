import React from "react";
import Heading from '@splunk/react-ui/Heading';
import Button from '@splunk/react-ui/Button';
import {customButtonConfirm,  } from './styling/customstyle.js';
import Metrics from "./components/metrics";
import WeekDays from "./components/weekDays";

const main = () => {
    
    return <>
            <Heading level={1} style={{textAlign: "center"}}>
                <p name="Heading 1"> Workout plan </p>
            </Heading>
            <Metrics/>
            <div style={{display: "flex" , justifyContent: "space-between" , alignItems: "center"}}>
              <WeekDays/>
               <div>
                 <Button label="submit" appearance="secondary" style={customButtonConfirm} />
              </div>
           </div>
    </>
}


export default main;