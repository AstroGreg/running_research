import React, { useEffect, useState } from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Slider from '@splunk/react-ui/Slider';
import Number from '@splunk/react-ui/Number';
import PropTypes from 'prop-types';


const Slidder = ({ value, min, max, step, label, onChange }) => {
  const [stateValue, setStateValue] = useState(value);
  useEffect(() => {
    if (!value){
        onChange({ metric: label, value: 0 });
    }
    setStateValue(value);
  }
, [value,  label, onChange]);

  const handleChange = (e, { value }) => {
    setStateValue(value);
    const metric = { metric: label, value };
    onChange(metric);
  };

  return (
    <ControlGroup label={label} labelWidth="3em" color="red">
      <Slider
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        value={stateValue}
        color="primary"
      />
    
      <Number
        min={min}
        max={max}
        step={step}
        value={stateValue}
        onChange={handleChange}
        style={{ flexBasis: 40 }}
      />
    </ControlGroup>
  );
};

Slidder.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slidder;
