import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({ title, data, dataKey, grid }) {



    return (
        <div className="chart" >
            <div className="chartWrapper">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="99%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#E0DFDF" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
