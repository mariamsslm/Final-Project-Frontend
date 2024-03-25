import React , {useState,useEffect} from 'react';
import style from '../overview/overview.module.css';
import Chart from 'chart.js/auto';
import { Bar , Doughnut } from 'react-chartjs-2';
import axios from 'axios'

const Overview = () => {

  const [posts , setPosts] = useState([])
  const [users , setUsers] = useState([])
  const [photographs , setPhotographs] = useState([])
  const [drawings , setDrawings] = useState([])
  const [writings , setWritings] = useState([])


  //fetch users
  useEffect(()=>{
    const getPosts = async()=>{
    try{
      
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getall`)
        setPosts(response.data.data)
        console.log(response.data.data)


        }catch(error){
          console.error(error)
        }
 
    }
    getPosts();
    },[]
  )


  //fetch posts
  useEffect(()=>{
    const getUsers = async()=>{
    try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/getall`)
        setUsers(response.data.Users)
        console.log(response.data.Users)
        }catch(error){
          console.error(error)
        }
    }
    getUsers();
    },[]
  )


  //fetch photographs
  useEffect(()=>{
    const getPhotographs = async()=>{
      try{
      const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getallphoto`)
      setPhotographs(response.data.data)
      }catch(error){
        console.error(error)
      }
    }
    getPhotographs()
  },[])

  //fetch Drawings
  useEffect(()=>{
    const getDrawings = async()=>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getdraw`)
        setDrawings(response.data.data)
      }catch(error){
      console.error(error)
    }
  }
getDrawings()
},[])

//fetch Writings
useEffect(()=>{
  const getwritings = async()=>{
    try{
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post/getallWritings`)
    setWritings(response.data.data)
    }catch(error){
      console.error(error)
    }
  }
  getwritings()
},[])





  //for donut
  const typeCounts = {};
  posts.forEach(post => {
    typeCounts[post.type] = (typeCounts[post.type] || 0) + 1;
  });
  const totalCount = posts.length;
  const percentages = Object.keys(typeCounts).map(type => ({
    type,
    percentage: ((typeCounts[type] / totalCount) * 100).toFixed(2)
  }));



 // for barchar
 const calculateArtUploadFrequency = (posts) => {
  const interval = 'day';

  const artUploadsCount = {};
  posts.forEach(post => {
    const date = new Date(post.createdAt); 
    let key;
    if (interval === 'day') {
      key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    } else if (interval === 'month') {
      key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    }
    artUploadsCount[key] = (artUploadsCount[key] || 0) + 1;
  });

  const sortedLabels = Object.keys(artUploadsCount).sort((a, b) => new Date(a) - new Date(b)); 
  const data = sortedLabels.map(label => artUploadsCount[label]);

  return { labels: sortedLabels, data };
};

const { labels, data } = calculateArtUploadFrequency(posts);

const chardata = {
  labels: labels,
  color:'white',
  datasets: [{
      label: ' Daily % of Posts ',
      data: data,
      backgroundColor:'#ffa343',
      
  }]
};



      const dataa = {
        labels: percentages.map(item => item.type),
        datasets: [{
          label: '# of Votes',
          data:percentages.map(item => item.percentage),
          backgroundColor: [
            '#ffa343',
            'black',
            '#fff',
            
          
          ],
          borderWidth: 1
        }]
      };
    
     

  return (
    <div className={style.main}>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>{users.length}</p>
            <p className={style.name}>Artists</p>
          </div>
          <div className={style.icon}>
          <i className="ri-user-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>{photographs.length}</p>
            <p className={style.name}>Photographs</p>
          </div>
          <div className={style.icon}>
          <i class="ri-camera-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>{drawings.length}</p>
            <p className={style.name}>Drawings</p>
          </div>
          <div className={style.icon}>
          <i class="ri-palette-line"></i>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.number}>{writings.length}</p>
            <p className={style.name}>Writings</p>
          </div>
          <div className={style.icon}>
          <i class="ri-pencil-line"></i>
          </div>
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.chart}>
          <h2>Daily Posts</h2>
          <div className={style.barchar}>
        
          <Bar data={chardata} />  
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
