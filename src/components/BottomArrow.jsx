import React, { Component } from 'react'

export default function BottomArrow() {
    return (
      <div className='col-sm-1' style={{position:'fixed',right:"10px",bottom:"30px",textAlign:"right"}}><button className="btn " style={{borderRadius:"4px", background:'#738ee0'}}><i className='fa fa-chevron-up'></i></button></div>
    )
  }
