import React from 'react';
import ReactDOM from 'react-dom';

class Klp extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
        showDetails: false,
        posts: [1, 2, 3]
    }
  }
  // shouldComponentUpdate()
  // {
  //     return true;
  // }
  render() {
    console.log("render фыв");
    let div = "asdasd";
    if( this.state.txt ) {
      div = <div> <h1>ХУЙ</h1> </div>;
    }
    const st = {
      fontSize : '32px',
      textAlign : 'center',
      margin : '20px',
      width : '100%'
    };

    return (
      <div style={st} onClick={ () => {

          this.setState({
              txt : !this.state.txt
          });
          console.log(this.state.txt);
        }}> H1 {div}</div>
    );
  }
}

export default Klp;
