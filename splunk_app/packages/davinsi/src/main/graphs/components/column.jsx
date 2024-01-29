import React from 'react';
import Bar from '@splunk/visualizations/Bar';

export default () => (
    <Bar
        options={{}}
        dataSources={{
            primary: {
                requestParams: { offset: 0, count: 20 },
                data: {
                    fields: [{ name: 'component', groupby_rank: '0' }, { name: 'admin' }],
                    columns: [
                        ['foo', 'bar', 'foobar'],
                        ['1556', '8904', '2327'],
                    ],
                },
                meta: { totalCount: 20 },
            },
        }}
    />
);