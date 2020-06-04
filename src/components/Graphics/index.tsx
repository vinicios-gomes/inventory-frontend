import React from 'react';
import { FiRadio, FiTablet, FiCode } from 'react-icons/fi';
import { BarChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

interface GraphicsDTO {
  info: object;
}

const dataTS = [
  { name: 'Page A', uv: 100, pv: 2400, amt: 2400, icon: <FiRadio /> },
  { name: 'Page B', uv: 3000, pv: 400, amt: 2400, icon: <FiTablet /> },
  { name: 'Page C', uv: 0, pv: 3400, amt: 2400, icon: <FiCode /> },
  { name: 'Page A', uv: 200, pv: 3400, amt: 2400, icon: <FiRadio /> },
];

interface AxisTick {
  x: string;
  y: string;
  payload: object;
}

const Graphics: React.FC = info => {
  return (
    <BarChart width={400} height={400} data={dataTS}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" barSize={30} fill="#3f3f" />
    </BarChart>
  );
};

export default Graphics;
