import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
const Statistic = () => {
    const data = [
        { Assignment: '1', value: 59 },
        { Assignment: '2', value: 60 },
        { Assignment: '3', value: 54 },
        { Assignment: '4', value: 60 },
        { Assignment: '5', value: 60 },
        { Assignment: '6', value: 60 },
        { Assignment: '7', value: 60 },
        { Assignment: '8', value: 60 }
    ]
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='text-center mt-12'>
                <h1 className='font-bold text-3xl'>This is my Assignment marks chart!!!!</h1>
                <PieChart className='mx-auto border border-violet-500 shadow-2xl mt-12' width={400} height={400}>
                    <Pie isAnimationActive={false} data={data} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                    <Tooltip></Tooltip>

                </PieChart>
            </div>
        </div>
    );
};

export default Statistic;