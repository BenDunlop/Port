import React, { Component } from 'react';


import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Main from './components/Main/Main';
import Backdrop from './components/Backdrop/Backdrop'


import './assets/css/style.scss'




class Index extends Component {

    state = {
        sideDrawerOpen:false
    }

    drawerToggleClickHandler = () =>{
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {


        let backDrop;


        if(this.state.sideDrawerOpen){
            backDrop =  <Backdrop click={this.backdropClickHandler}/>
        }


        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                <Main />
            </div>
        );
    }
}

export default Index;