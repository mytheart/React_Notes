import React, { Component } from 'react'
// import ReactEcharts from 'echarts-for-react';  

export default class App extends Component {

  render() {
    return (
      <div onClick={(e)=>{console.log('react中的事件:div')}}>
        <button onClick={(e)=>{

          // console.log(e.isPropagationStopped())
          console.log('react中的事件: button')
          // e.stopPropagation();
          // console.log(e.isPropagationStopped())
          e.persist()
          setTimeout(()=>{
            console.log(e.target)
          }, 1000)

          }}>确认</button>
      </div>

    )
  }
}

document.querySelector("#root").onclick = function(e) {
  // e.stopPropagation();
  console.log('真实dom的事件')
}

