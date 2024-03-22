import React from 'react'
import loading from '../assets/loading.gif'

const LoadingPage = ()=>{
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            
        }}>
            <img src={loading} alt='Loading...' style={{width:'5%'}}></img>
        </div>
    )
}
export default LoadingPage;