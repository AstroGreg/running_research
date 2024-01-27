import React, { Component } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Slider from '@splunk/react-ui/Slider';
import Number from '@splunk/react-ui/Number';
import { ThemeConsumer } from 'styled-components';

class Slidder extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 300 };
    }

    handleSliderChange = (e, { value }) => {
        this.setState({ value });
    };

    handleNumberChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (

           
            <ControlGroup label='Greg' labelWidth="3em" color='red' >
               
                <Slider
                    
                    min={100}
                    max={500}
                    step={25}
                    onChange={this.handleSliderChange}
                    value={this.state.value}
                    color='primary'
                />
              
                <Number
         
                    min={100}
                    max={500}
                    step={25}
                    value={this.state.value}
                    onChange={this.handleNumberChange}
                    style={{ flexBasis: 40,  }}
                />

            </ControlGroup>

        );
    }
}

export default Slidder;