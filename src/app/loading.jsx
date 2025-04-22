import React from 'react'
import "../../src/app/styles/loading.css"


export default function loading() {
  return (
  //    <div className="loading-wrapper">
  //   <div className="loading">
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#030405', height: '100vh' }}>
      <img src="/img/drive_fav_white.svg" alt="Loading..." className="spinner" />
      <h1 style={{color: '#FFFFFF', marginLeft: "10px"}}>Loading...</h1>
    </div>
  )
}
