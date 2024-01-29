import React from "react"; 
import propTypes from "prop-types";
import Heading from "@splunk/react-ui/Heading";
import Button from "@splunk/react-ui/Button";
import BarGraph from "./components/bar";
import { customButtonConfirm } from "../styling/customstyle";

const graph = ({data ,onReset}) => {


    return <div style={{borderTop: "1px solid #E5E7EB", marginTop: "2em", paddingTop: "1em"}}>
        <div style={{display: "flex" , justifyContent: "space-between", alignItems: "center"}}>
        
        <Heading>Chance of injury: 68%</Heading>
        <div>
        <Button style={customButtonConfirm} label="reset" appearance="secondary" onClick={onReset} />
        </div>

        </div>
   
        <BarGraph data={data}/>
    </div>;
}

graph.propTypes = {
    data: propTypes.object,
    onReset: propTypes.func,
}


export default graph;
