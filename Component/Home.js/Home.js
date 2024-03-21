import React from 'react';
import './Home.css';
import CountUp from 'react-countup';


const Home = () => {
    return (
        <section className='numbers'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <CountUp end={1287} duration={5} className='counter' />
                        <h6>SAVINGS</h6>
                    </div>
                    <div className='col-md-3'>
                        <CountUp end={5786} duration={5} className='counter'/>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className='col-md-3'>
                        <CountUp end={1440} duration={5} className='counter'/>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className='col-md-3'>
                        <CountUp end={7110} duration={5} className='counter'/>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Home;