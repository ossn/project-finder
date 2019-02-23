import React, { Component } from 'react';
import NavBar from './NavBar.js';
import SwipeCards from './SwipeCards.js';

export default class App extends Component {
    render(){
        return(
            <div>
                <NavBar title= "Project finder"/>
                <SwipeCards/>
            </div>

        )
    }
}