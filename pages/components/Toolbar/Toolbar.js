import React from 'react';
import Link from 'next/link'


// LINKS FOR THE HEADER
import Links from '../Links/Links'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'



import './Toolbar.scss'




const toolbar = (props) => (
    <header className="navigation">
        <nav className="navigation__nav">
            <div className="navigation__nav-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navigation__logo">
                <Link href="/">
                    <a>The LOGO</a>
                </Link>
            </div>
            <div className="u-spacer" />
            <div className="navigation__nav-items">
                <Links />
            </div>
        </nav>
    </header>
)

export default toolbar