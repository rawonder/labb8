import React, { Component } from 'react'
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <div className='navIcon'></div>
        <nav>
            <ul>
                <li><a href='/'>Главная</a></li>
                <li><a href='/about'>Информация</a></li>
                <li><a href='/footer'>Контакты</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
