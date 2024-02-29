import React from 'react';
import { Bar } from 'react-chartjs-2'
import style from '../overview/overview.module.css'


const Overview=()=>{
    const Data = {
        labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'],
        datasets: [{
            label: 'Likes',
            data: [50, 30, 40, 60, 45], 
        }]
    };
    return(
        <div className={style.overview}>
        <Bar data={Data}/>
        </div>
    )
}
export default Overview;