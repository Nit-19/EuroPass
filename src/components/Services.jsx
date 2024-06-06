import React, { Component } from 'react'
import setting1 from '../assets/img/setting1.png'

export default function Services() {
    return (
        <div className='services' id='services' style={{ marginTop: '120px', marginBottom: '60px' }} >
            <div className='data' >
                <div class="headTextDiv" style={{marginTop:'100px'}}>
                    <h2>We Are Always Ready To Help You & Your Company</h2>
                </div>
                <div className='img d-flex' style={{ flexDirection: 'column', alignItems: "center" }}>
                    <img src={setting1} alt="" style={{ width: "180px", padding: "20px 0" }} />
                    <p className='muted serviceHeadline'>We are committed to providing exceptional support and innovative solutions, ensuring your company overcome challenges and achieves its goal </p>
                </div>
                <div className='logos'>
                    <i class="fa-solid fa-gear"></i>
                    <hr className='col-sm-2' />
                    <i class="fa-solid fa-chart-line"></i>
                    <hr className='col-sm-2' />
                    <i class="fa-solid fa-laptop"></i>
                </div>
                <div className='logo-text'>
                    <h4><b>Digital Marketing</b></h4>
                    <span className='col-sm-2'></span>
                    <h4><b>Tech Support</b></h4>
                    <span className='col-sm-2'></span>
                    <h4><b>Web Development</b></h4>
                </div>
            </div>
        </div>
    )
}