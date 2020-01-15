import React, { Component } from 'react'
// import ReactEcharts from 'echarts-for-react';  

export default class App extends Component {

  render() {
    return (
      <div>
        1111
        <button onClick={()=>{console.log('react中的事件')}}>确认</button>
      </div>

    )
  }
}

document.querySelector("#root").onclick = function(e) {
  // e.stopPropagation();
  console.log('真实dom的事件')
}

