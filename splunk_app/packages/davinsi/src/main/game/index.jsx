import React from "react";


import Heading from '@splunk/react-ui/Heading';
import Slidder from "./components/slider";
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import Button from '@splunk/react-ui/Button';
import { StyledContainer } from './styling/style';


const main = () => {

    return <StyledContainer>

        <Heading level={1}  style={{textAlign: "center"}}>
                <p name="Heading 1"> Week 1 </p>
            </Heading>
            <Slidder/>
            <Slidder/>
            <Slidder/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ButtonGroup>
            <Button selected>Mon</Button>
            <Button >Tue</Button>
            <Button >WED</Button>
            <Button>THU</Button>
            <Button style={{color: "red"}}>FRI</Button>
            <Button>SAT</Button>
            <Button>SUN</Button>
            
        </ButtonGroup>
        <Button label="submit" appearance="secondary" />
     
            </div>
            </StyledContainer>;
}


export default main;