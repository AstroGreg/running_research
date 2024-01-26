import React from 'react';
import Bar from '@splunk/visualizations/Bar';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

const BarGraph = ({data = [
    ['foo', 'bar', 'foobar'],
    ['1556', '8904', '2327'],
]})  => {
    return (
    <Bar
        options={{}}
        dataSources={{
            primary: {
                requestParams: { offset: 0, count: 20 },
                data: {
                    fields: [{ name: 'component', groupby_rank: '0' }, { name: 'admin' }],
                    columns: data,
                },
                meta: { totalCount: 20 },
            },
        }}
    />
)};


BarGraph.propTypes = propTypes;

export default BarGraph;