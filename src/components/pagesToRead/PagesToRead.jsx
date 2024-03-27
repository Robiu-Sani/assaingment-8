import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {getBookFromLocalStore} from '../../utility/LocalStorage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {

  const [charData , setChartData] = useState([])

  const data = charData.map(item => ({ name: item.bookName, uv: item.totalPages }));

  useEffect(() => {
    const readbook = getBookFromLocalStore();
    setChartData(readbook)
  },[])

  return (
    <div className='flex min-h-[200px] justify-center items-center'>
      {charData.length == 0 ? <h1 className='text-2xl'>There is no item added in your read list </h1> : 
      <BarChart
        className='mx-auto my-20 max-w-full'
        width={1000}
        height={500}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
          ))}
        </Bar>
      </BarChart>}
    </div>
  );
}
