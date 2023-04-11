import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataChart from '../DataChart/DataChart';

const Statistic = () => {
    const data = useLoaderData()
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            {
                data.map(datah => <DataChart key={datah.id} datah={datah}></DataChart>)
            }
        </div>
    );
};

export default Statistic;