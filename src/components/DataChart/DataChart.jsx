import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DataChart = () => {
    const file = [
        {
            "id": 1,
            "assignmentNo": 1,
            "assignmentMark": 59
        },
        {
            "id": 2,
            "assignmentNo": 2,
            "assignmentMark": 60
        },
        {
            "id": 3,
            "assignmentNo": 3,
            "assignmentMark": 54
        },
        {
            "id": 4,
            "assignmentNo": 4,
            "assignmentMark": 60
        },
        {
            "id": 5,
            "assignmentNo": 5,
            "assignmentMark": 60
        },
        {
            "id": 6,
            "assignmentNo": 6,
            "assignmentMark": 60
        },
        {
            "id": 7,
            "assignmentNo": 7,
            "assignmentMark": 60
        },
        {
            "id": 8,
            "assignmentNo": 8,
            "assignmentMark": 60
        }
    ]
    console.log(file);
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={400}
                    data={file}>
                    <Bar type='bar' dataKey="assignmentNo" fill="#8884d8" />
                    <XAxis dataKey='assignmentMark' />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DataChart;