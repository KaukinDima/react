import React, {Component} from './react';
import React, {Component} from './List';


class Board extends Component {
  constructor() {

  }
  render() {
    return (
      <div classname='app'>
        <List
          id="todo"
          title="to do"
          cards={this.props.cards.filter( (card) => card.status === "todo" )} />
      </div>
    );
  }
}

export default Board;
