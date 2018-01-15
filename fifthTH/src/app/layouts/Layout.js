import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';
import {Link} from 'react-router';


export default class Layout extends React.Component
{

    constructor()
    {
        super(...arguments);
        this.brand = 'React Blog';
    }

    isActive(href)
    {
        return window.location.pathname === href;
    }

    render()
    {
        return <div>
            <Menu brand={this.brand}>
                <MenuItem href="/" active={this.isActive('/')}>
                    Главная
                </MenuItem>
                <MenuItem href="/users" active={this.isActive('/users')}>
                    Пользователи
                </MenuItem>
                <MenuItem href="/comments" active={this.isActive('/comments')}>
                    Комментарии
                </MenuItem>
                <MenuItem href="/test" active={this.isActive('/test')}>
                    Test
                </MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Link to="/errorpage">Перейти на страницу с ошибкой</Link>
                        {this.props.children}
                    </div>
                </div>
            </div>
            <Footer>
                &copy; 2017
            </Footer>
        </div>;
    }
}
