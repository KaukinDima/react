import React from 'react';
import ReactDOM from 'react-dom';

import Klp from './Klp';

class KanbanCard extends React.Component
{
    constructor(){
        super(...arguments);
        console.log('KanbanCard::constructor()');

        this.state = {
            txt: false,
            posts: [1, 2, 3]
        }
    }

    //setState
    shouldComponentUpdate()
    {
        return true; //Если метод shouldComponentUpdate не возвращает
    }

    render()
    {
        console.log('KanbanCard::render()');

        let cardDetails;

        if(this.state.txt){
            cardDetails = (
                <div className="card__details">
                  asdasdasd
                </div>
            );
        }

        return (
            <div className="card">
                <div className="card__title" onClick={
                    () => {
                        this.setState({
                            txt: !this.state.txt
                        });
                    }
                }>123 {cardDetails}</div>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(

  <div>
    asdasd
    <KanbanCard />
    <Klp />
  </div>,
  app
);
