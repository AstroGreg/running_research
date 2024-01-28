import React from "react";
import propTypes from "prop-types";
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import { StyledButton} from '../styling/style';
import WeekButton from "./WeekButton";


const WeekDays = ({onClick, currentDay}) => {
    return <>
         <StyledButton >
                  <ButtonGroup style={{borderBottom: "0px"}} >
                        <WeekButton style={{borderLeftWidth: "1px"}} label="Mon" day={0} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Tue" day={1} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Wed" day={2} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Thu" day={3} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Fri" day={4} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Sat" day={5} currentDay={currentDay} onClick={onClick} />
                        <WeekButton label="Sun" day={6} currentDay={currentDay} onClick={onClick} />
                   </ButtonGroup>
                </StyledButton>
                </>
}
WeekDays.propTypes = {
    onClick: propTypes.func.isRequired,
    currentDay: propTypes.number
}

export default WeekDays;