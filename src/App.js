import React, { Component } from 'react';

function buildMT(){
  let i;
  let j;
  let res1;
  let rows = [];
  for(i=1;i<10;i++) {
    let cell = [];
    for(j=1;j<10;j++) {
      cell.push(<td>{i*j}</td>);
    }
    rows.push(<tr>{cell}</tr>);    
  }
  let res=<table>{rows}</table>;
  return res;
/*
  let numbers = [1,2,3,4,5,6,7,8,9];

  let res = numbers.map((number) =>
    <td>{number}</td>
  );

  return (
    <tr>{res}</tr>
  );*/

};



class App extends Component {
  render() {
    return (
      <div className="App">
        {buildMT()}
      </div>
    );
  }
}

export default App;
