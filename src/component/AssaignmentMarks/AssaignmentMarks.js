import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssaignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4000,
            result: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            marks: 3000,
            result: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            marks: 2000,
            result: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            marks: 2780,
            result: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            marks: 1890,
            result: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 2390,
            result: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            marks: 3490,
            result: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <LineChart width={800} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#000" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssaignmentMarks;