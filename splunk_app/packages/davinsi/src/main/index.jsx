import React , {useState} from "react";
import Game from "./game";
import Graph from "./graphs";
import Column from "./graphs/components/column";


const Main = () => {
    const [data, setData] = useState([]);
    const [metrics, setMetrics] = useState([{}]);
    const onReset = () => {
        setData([]);
        setMetrics([{}]);
    }

    const onSubmited = (Submitted_metrics) => {
        console.log(metrics);
        
        // get the sum of all the metrics exertion, gym and kilometers

        const [exertion, gym, kilometers] = metrics.reduce((acc, curr) => {
            return [acc[0] + curr.exertion, acc[1] + curr.gym, acc[2] + curr.kilometers];
        }
        , [0, 0, 0]);


        const improvement = 1 + ((exertion/10 + gym/3 + kilometers/20) / 50);
        console.log(improvement);
        setData( {
            fields: [
                {
                    name: 'Distances',
                },
                {
                    name: 'improvement',
                },
                {
                    name: 'current',
                },
            ],
            columns: [
                [
                    '400m',
                    '800m',
                    '1000m',
                    '1500m',
                    '2000m',
                    '3000m',
                    '5000m',
                ],
                ['50', '110', '150', '220', '500', '600', "900"],
                [50*improvement, 110*improvement, 150*improvement, 220*improvement, 500*improvement, 600*improvement, 900*improvement ],   ],
        })
    }
    return <div>
          <Game setMetrics={setMetrics} metrics={metrics} onSubmited={onSubmited} />
          <Graph data={data} onReset={onReset}/>
    </div>;
}

export default Main;