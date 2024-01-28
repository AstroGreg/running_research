import React , {useState} from "react";
import Heading from '@splunk/react-ui/Heading';
import Button from '@splunk/react-ui/Button';
import {customButtonConfirm,  } from './styling/customstyle.js';
import Metrics from "./components/metrics";
import WeekDays from "./components/weekDays";


const Main = () => {
    const [selectedDay, setSelectedDay] = useState(0);
    const [metrics, setMetrics] = useState([{}]);

  
    const UpdateMetric = (metric) => {
        /* check if day exist and then check if metric type exists */

        const newMetrics = metrics;
        const newMetric = { [metric.metric]: metric.value };
        if (newMetrics[selectedDay]) {
            if (newMetrics[selectedDay][metric.metric]) {
                newMetrics[selectedDay][metric.metric] = metric.value;
            } else {
                newMetrics[selectedDay] = { ...newMetrics[selectedDay], ...newMetric };
            } 
        } else {
            newMetrics[selectedDay] = newMetric;
        }
        setMetrics(newMetrics);
        console.log(metrics);
     
    }

    const UpdateDay = (day) => {
      setSelectedDay(day);
    }

    return <>
            <Heading level={1} style={{textAlign: "center"}}>
                <p name="Heading 1"> Workout plan</p>
            </Heading>
            <Metrics metric={metrics[selectedDay]} day={selectedDay} onChange={UpdateMetric} />
            <div style={{display: "flex" , justifyContent: "space-between" , alignItems: "center"}}>
              <WeekDays currentDay={selectedDay} onClick={UpdateDay}/>
               <div>
                 <Button label="submit" appearance="secondary" style={customButtonConfirm} />
              </div>
           </div>
    </>
}


export default Main;