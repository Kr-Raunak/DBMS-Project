import React from 'react'
import ERDiagrm from "./ERDiagrm.jpg"
import Footer from '../components/Footer'
const Erdiag = () => {
  return (
    <>
    <div style={{paddingTop : "38px" , display : "flex" , justifyContent : "center" , alignItems : "center" }}>
        <img src = {ERDiagrm} style={{height : "680px" , width : "1000px"}}/>
    </div>
    
    </>
  )
}

export default Erdiag