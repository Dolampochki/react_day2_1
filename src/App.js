import React, { Component } from 'react';

function buildMT(){

  /*
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
  return res;*/

  //let numbers = [1,2,3,4,5,6,7,8,9];

  let numbers = [...Array(9).keys()];

  let res = numbers.map((number) => (
      numbers.map((number2) => <td key={number +","+number2}>{(number+1)*(number2+1)}</td>
    )
    
  ));

  return res;

};


class App extends Component {


  render() {

    const rows = buildMT();

    return (
      <div className="App">
        <table>
          <tbody>
            {rows.map((row, i) => {
              return <tr key={i}>{row}</tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
