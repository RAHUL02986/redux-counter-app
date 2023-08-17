import React from 'react'
import '../style/style.css'
import {  connect } from 'react-redux'
import { updateMax } from '../store/action';
function Max(props) {
    function handleClick(max){
        props.dispatch(updateMax(max));
    }
  return (
    <>
    <button className={props.max === 100 && 'active'} onClick={()=>handleClick(100)}>100</button>
    <button className={props.max  === 200 && 'active'} onClick={()=>handleClick(200)}>200</button>
    <button className={props.max === 500 && 'active'} onClick={()=>handleClick(500)}>500</button>

      
    </>
  )
}
function mapStateToProps(state){
    return{
        max : state.max,
    }
}

export default connect(mapStateToProps)(Max);
