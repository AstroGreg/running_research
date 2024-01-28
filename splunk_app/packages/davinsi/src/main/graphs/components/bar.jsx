import React from 'react';
import Bar from '@splunk/visualizations/Bar';

const bar = () => (
    <div style={{width: "50em"}}>
    <Bar
        options={{}}
        dataSources={{
            primary: {
                requestParams: { offset: 0, count: 20 },
                data: {
                    fields: [
                        {
                            name: 'sourcetype',
                        },
                        {
                            name: 'admin',
                        },
                        {
                            name: 'user',
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
                        ['49', '105', '140', '210', '490', '590', "870"],                    ],
                },
                meta: { totalCount: 20 },
            },
        }}
    />
    </div>
);

export default bar;