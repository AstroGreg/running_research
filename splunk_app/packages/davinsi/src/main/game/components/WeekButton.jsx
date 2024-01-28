import React from 'react';
import propTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';
import { customButtonStyle } from '../styling/customstyle';

const WeekButton = ({style, currentDay, onClick, label, day}) => {
    const clickDay = () => {
        onClick(day);
    }

    return (
        <Button onClick={clickDay} style={{ ...(customButtonStyle || {}), ...(currentDay === day ? {background: "#E5E7EB", color: "black"}: {}) , ...style}}> {label}</Button>
        )
}

WeekButton.propTypes = {
    style: propTypes.object,
    day: propTypes.number,
    currentDay: propTypes.number,
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}

export default WeekButton;
