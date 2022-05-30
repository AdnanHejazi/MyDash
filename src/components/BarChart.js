import React, { useEffect } from 'react'
import * as d3 from 'd3'
import '../css/BarChart.css'
const BarChart = () => {

    var data =[];
    for (let i = 0; i < 15; i++) {
        const newNumber = Math.random() * 10;
        data.push(newNumber)
    }
console.log(data)

useEffect(() => {
    const svg = d3.select('.canvas').selectAll('div')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'bar')
            .style('height', function (d) {
                return d * 50 + 'px';
            })
    
}, [data])

    return (
        <div className='canvas'></div>
    )
}

export default BarChart
