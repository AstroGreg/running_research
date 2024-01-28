import React, { useEffect, useState } from "react";
import Button from "@splunk/react-ui/Button";
import propTypes from "prop-types";
import Slidder from "./slider";
import { StyledContainer } from '../styling/style';

const Metrics = ({ metric, onChange }) => {

    const UpdateMetric = (newMetric) => {
        onChange(newMetric);
    }
    return (
        <>       
            <StyledContainer>
                <Slidder label="kilometers" max={20} min={0} step={0.5} value={metric && metric.kilometers ? metric.kilometers : 0} onChange={UpdateMetric} />
                <Slidder label="exertion" max={10} min={0} step={0.5} value={metric && metric.exertion ? metric.exertion : 0} onChange={UpdateMetric} />
                <Slidder label="gym" max={3} min={0} step={0.5} value={metric && metric.gym ? metric.gym : 0} onChange={UpdateMetric} />
            </StyledContainer>
        </>
    );
}

Metrics.propTypes = {
    onChange: propTypes.func.isRequired,
    metric: propTypes.object,
}

export default Metrics;
