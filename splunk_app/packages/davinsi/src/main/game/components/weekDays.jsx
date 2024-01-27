import React from "react";
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import Button from '@splunk/react-ui/Button';
import { customButtonStyle,  } from '../styling/customstyle.js';
import { StyledButton} from '../styling/style';


const WeekDays = () => {
    return <>
         <StyledButton >
                  <ButtonGroup style={{borderBottom: "0px"}} >
                    <Button  style={customButtonStyle}>Mon</Button>
                    <Button  style={customButtonStyle}>Tue</Button>
                    <Button  style={customButtonStyle}>Wed</Button>
                    <Button  style={customButtonStyle}>Wed</Button>
                    <Button  style={customButtonStyle}>Wed</Button>
                    <Button  style={customButtonStyle}>Wed</Button>
                    <Button  style={customButtonStyle}>Wed</Button>
                  </ButtonGroup>
                </StyledButton>
                </>
}

export default WeekDays;