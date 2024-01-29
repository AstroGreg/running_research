import React from 'react';
import propStyles from 'prop-types';
import Bar from '@splunk/visualizations/Bar';

const bar = ({data}) => {

    return(
    <div>
    <Bar
        dataSources={{
            primary: {
                requestParams: { offset: 0, count: 20 },
                data,
                meta: { totalCount: 20 },
            },
        }}
    />
    </div>
)};

bar.propTypes = {
    data: propStyles.array,
};

export default bar;