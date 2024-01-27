import React from "react";


import Heading from '@splunk/react-ui/Heading';
import Slidder from "./components/slider";
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import Button from '@splunk/react-ui/Button';
import { StyledContainer , StyledButton, StyledSliderContainer} from './styling/style';


const main = () => {

    return <>

        <Heading level={1}  style={{textAlign: "center"}}>
                <p name="Heading 1"> Workout plan </p>
            </Heading>
            <StyledContainer >
                <Slidder/>
                <Slidder/>
                <Slidder/>
            </StyledContainer >
               <div style={{display: "flex" , justifyContent: "space-between" , alignItems: "center"}}>
                <StyledButton >
                  <ButtonGroup style={{borderBottom: "0px"}} >
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Mon</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Tue</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Wed</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Thu</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Fri</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Sat</Button>
                    <Button  style={{ background:"white", borderColor:"#E5E7EB" ,  borderBottom: "0px"}}>Sun</Button>
                  </ButtonGroup>
                </StyledButton>
            
                    <div>
                      <Button label="submit" appearance="secondary" style={{  borderRadius: "5px", border: "none", color: "white", background: "#1e3a8a", marginLeft: "0.5em", marginTop: "0.2em", marginBottom: "0.2em"}} />
                    </div>
                </div>

                </>
}


export default main;