import React from "react"; 
import BarGraph from "./components/bar";

const graph = () => {
    return <div style={{background: "red"}}>
        <p>Chance of injury Medium</p>
        <BarGraph />
    </div>;
}

export default graph;
