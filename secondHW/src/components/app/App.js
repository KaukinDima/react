import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { menuList } from './ListOfMenu';



class App extends Component {

  getMenu() {
    return menuList.map( (v) => {
      if( v == "Main" ) return <li className="active">{v}</li>
      else return <li>{v}</li>
    });
  }

  render() {

    return (
      <div className='menu2'>
        <h1>Menu HW</h1>
        <ul>{this.getMenu()}</ul>
      </div>
    );
  }

}


export default App;
