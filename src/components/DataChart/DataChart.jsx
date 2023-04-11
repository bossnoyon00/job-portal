import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DataChart = ({ datah }) => {
    const { id, assignmentNo, assignmentMark } = datah;
    const data = [
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
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={150}
                    height={40}
                    data={data}>
                    <Bar dataKey="assignmentNo" fill="#8884d8" />
                    <Bar dataKey={data.length} fill="#8884d8" />
                    <XAxis dataKey='assignmentMark' />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DataChart;