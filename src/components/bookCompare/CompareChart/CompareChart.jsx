import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function CompareChart(props) {
    const {customState} = props
    const [ line, setLine ] = useState(1)
    const data = customState.map(item => ({ name: item.bookName, uv: item.totalPages, pv : (item.rating), amt: item.yearOfPublishing }));
  
    const handleComparePages = () => {
        setLine(1)
    }
  
    const handleCompareRating = () => {
        setLine(2)
    }
  
    const handleCompareyear = () => {
        setLine(3)
    }

    return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className="w-full p-5">
            <button onClick={handleComparePages} className='w-full my-3 py-4 rounded-md bg-green-500 text-white hover:bg-green-400'>Compare By Pages</button>
            <button onClick={handleCompareRating} className='w-full my-3 py-4 rounded-md bg-green-500 text-white hover:bg-green-400'>Compare By Rating</button>
            <button onClick={handleCompareyear} className='w-full my-3 py-4 rounded-md bg-green-500 text-white hover:bg-green-400'>Compare By Publishing year</button>
        </div>
    <LineChart className='max-w-full col-span-1 md:col-span-2' width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    {line === 1 ? <Line type="monotone" dataKey="uv" stroke="#8884d8" /> : line === 2 ? <Line type="monotone" dataKey="pv" stroke="orange" /> :line === 3 ? <Line type="monotone" dataKey="amt" stroke="#8884d8" />: ''}
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </div>
  )
}
