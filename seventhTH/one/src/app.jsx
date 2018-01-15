import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';

import {Provider} from 'react-redux';
import  store from  './app/stores/store';

// import About from './app/components/static_view/About';
// import Goods from './app/components/static_view/Goods';
// import Contacts from './app/components/static_view/Contacts';
// import Home from './app/components/static_view/Home';
//
// class App extends React.Component
// {
//     constructor(){
//         super(...arguments);
//         this.state = {
//             route: window.location.hash.substr(1)
//         };
//     }
//
//     componentDidMount(){
//         window.addEventListener('hashchange', () => {
//             this.setState({
//                 route: window.location.hash.substr(1)
//             });
//         })
//     }
//
//     render()
//     {
//         var Child;
//         switch (this.state.route){
//             case '/about':
//                 Child = About;
//                 break;
//             case '/goods':
//                 Child = Goods;
//                 break;
//             case '/contacts':
//                 Child = Contacts;
//                 break;
//             default:
//                 Child = Home;
//         }
//
//         return (<div>
//             <header>Проложение v1.0.0</header>
//             <ul>
//                 <li><a href="#/home">Главная</a></li>
//                 <li><a href="#/about">О нас</a></li>
//                 <li><a href="#/goods">Товары</a></li>
//                 <li><a href="#/contacts">Контакты</a></li>
//             </ul>
//             <div>
//                 <Child/>
//             </div>
//         </div>);
//     }
// }
//
// const app = document.getElementById('app');
// ReactDOM.render(<App/>, app);


import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Comments from './app/components/Comments';


const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Main}/>
                <Route path="users" component={Users}>
                    <Route path=":userId" component={User}/>
                </Route>
                <Route path="comments" component={Comments}/>
                <Redirect from="/redirect1" to="/users"/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>
    , app);