import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import '../css/BarChart.css'
const BarChart = () => {

    let data = useMemo(() => {
        return [];
        
    }, []);
    for (let i = 0; i < 15; i++) {
        const newNumber = Math.random() * 10;
        data.push(newNumber)
    }

useEffect(() => {
            d3.select('.canvas').selectAll('div')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'bar')
            .style('height', function (d) {
                return d * 50 + 'px';
            })
    
}, [data])

    return (
        <div>
        <h1 style={{textAlign: "center", fontSize: "2.7rem"}}>Bar Chart</h1>
        <div className='canvas'></div>
        </div>
    )
}

export default BarChart
