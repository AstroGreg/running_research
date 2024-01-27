import React from "react";
import Slidder from "./slider";
import { StyledContainer } from '../styling/style';

const Metrics = () => {
    return <>
           <StyledContainer >
                <Slidder label="kilometers" max={20} min={0} set={0.5} value={0}  />
                <Slidder label="exertion" max={10} min={0} set={0.5} value={0}  />
                <Slidder label="gym" max={3} min={0} set={0.5} value={0}  />
            </StyledContainer ></>;
}

export default Metrics;