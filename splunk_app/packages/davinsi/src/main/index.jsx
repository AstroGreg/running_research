import React , {useState} from "react";
import Game from "./game";
import Graph from "./graphs";


const Main = () => {
    const [data, setData] = useState([]);
    const [metrics, setMetrics] = useState([{}]);
    const [riskOfInjury, setRiskOfInjury] = useState("-");
    const onReset = () => {
        console.log("reset");
        setData([]);
        setMetrics([{}]);
        setRiskOfInjury("-");
    }

    const onSubmited = () => {

        // get the sum of all the metrics exertion, gym and kilometers
       
        const [exertion, gym, kilometers, zeroDays] = metrics.reduce((acc, metric) => {
            return [acc[0] + (metric.exertion ? metric.exertion : 0), acc[1] + (metric.gym ? metric.gym : 0), acc[2] + (metric.kilometers ? metric.kilometers : 0), acc[3] + (metric.kilometers === 0 && metric.exertion === 0 && metric.gym === 0 ? 1 : 0)];
        }
        , [0, 0, 0, 0]);
      
        const restDays = (7 - metrics.length) + zeroDays;
        const injury = (kilometers > 50 ? 1 : 0) + (gym > 1 ? 1 : 0) + (exertion/7 > 6 ? 1 : 0) + (restDays < 2 ? 1 : 0);
        const injuryLabels = {0: "low", 1: "medium", 2: "high", 3: "very high", 4: "almost certain"};

        setRiskOfInjury(injuryLabels[injury]);
        const I = 1 - ((exertion/10 + gym/3 + kilometers/20) / 1000);
        setData( {
            fields: [{  name: 'Distances', },{ name: 'current', }, { name: 'improvement', }
            ],
            columns: [[ "400", "800", "1000", "1500", "2000", "3000", "5000" ],
                      ['50', '110', '150', '220', '500', '600', "900"],
                      [50*I, 110*I, 150*I, 220*I, 500*I, 600*I, 900*I ],   ],
        })
    }
    return <div>
          <Game setMetrics={setMetrics} metrics={metrics} onSubmited={onSubmited} />
          <Graph data={data} riskOfInjury={riskOfInjury} onReset={onReset}/>
    </div>;
}

export default Main;