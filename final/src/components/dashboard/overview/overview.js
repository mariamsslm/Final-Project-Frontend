import React from 'react';
import style from '../overview/overview.module.css';
import Chart from 'chart.js/auto';
import { Bar , Doughnut } from 'react-chartjs-2';

const Overview = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
        }]
      };

      const dataa = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple'
          ],
          borderWidth: 1
        }]
      };
    
     

  return (
    <div className={style.main}>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>1990</p>
            <p className={style.name}>users</p>
          </div>
          <div className={style.icon}>
            <i className="ri-user-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>1990</p>
            <p className={style.name}>users</p>
          </div>
          <div className={style.icon}>
            <i className="ri-user-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>1990</p>
            <p className={style.name}>users</p>
          </div>
          <div className={style.icon}>
            <i className="ri-user-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>1990</p>
            <p className={style.name}>users</p>
          </div>
          <div className={style.icon}>
            <i className="ri-user-line"></i>
          </div>
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.chart}>
          <h2>Users</h2>
          <div className={style.barchar}>
        
          <Bar data={data} />  
          </div>     
         
        </div>
        <div className={style.chart}>
          <h2>Posts</h2>
          <div className={style.donut}>
          <Doughnut data={dataa} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
