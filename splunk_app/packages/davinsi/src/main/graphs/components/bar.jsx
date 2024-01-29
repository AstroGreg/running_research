import React from 'react';
import propStyles from 'prop-types';
import Bar from '@splunk/visualizations/Bar';

const bar = ({data, options}) => {
    console.log(data);
    return(
    <div>
    <Bar
        options={{options}}
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
    data: propStyles.object,
    options: propStyles.object,
};

export default bar;