import React, { Component } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Slider from '@splunk/react-ui/Slider';
import Number from '@splunk/react-ui/Number';
import PropTypes from 'prop-types';

class Slidder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            max: props.max,
            min: props.min,
            step: props.step,
            label: props.label,
        };
    }

    handleSliderChange = (e, { value }) => {
        this.setState({ value });
    };

    handleNumberChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (

           
            <ControlGroup label={this.state.label} labelWidth="3em" color='red' >
               
                <Slider
                    min={this.state.min}
                    max={this.state.max}
                    step={this.state.step}
                    onChange={this.handleSliderChange}
                    value={this.state.value}
                    color='primary'
                />
              
                <Number
         
                    min={this.state.min}
                    max={this.state.max}
                    step={this.state.step}
                    value={this.state.value}
                    onChange={this.handleNumberChange}
                    style={{ flexBasis: 40,  }}
                />

            </ControlGroup>

        );
    }
}

Slidder.propTypes = { 
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number,
    label: PropTypes.string.isRequired,
};

export default Slidder;