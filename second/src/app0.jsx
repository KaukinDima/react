import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(  ) {
    super();
    this.con = true;
  }

  date() {
    return 1234;
  }

  testClick () {
    return "asdasdasdasd";
  }

  asdAsd() {
    alert(123123);
  }

  changecon () {
    // if( this.con ) this.con = false;
    // else this.con = true;
    alert(this.con);
  }

  test() {
    return (
      <div>
        <h1 onClick={this.asdAsd}>11 {this.testClick()}</h1>
        <button onClick={this.asdAsd}>{ this.con ? 123132 : this.testClick() }</button>
      </div>
    );
  }

  render() {
    return this.test();
  }
}


const app = document.getElementById('app');

ReactDOM.render(
    <div>
      <App text="123" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae commodi consequatur ducimus earum eos esse impedit, iusto labore libero maiores molestias nam odio optio, porro praesentium quaerat quis tempora?</p>
    </div>,
app);
