import React, { Component } from 'react';
// import NavBar from './NavBar.js';
import ButtonAppBar from './NavBar.js'
import SwipeCards from './SwipeCards.js';
import Button from '@material-ui/core/Button';


export default class App extends Component {
    render(){
        return(
            <div>
                {/* <NavBar title= "Project finder" barName = "Project Finder"/> */}
                <ButtonAppBar title = "Project finder"/>
                <SwipeCards/>
                <Button color="inherit" >Done</Button>

            </div>

        )
    }
}