import React from 'react';
import Link from 'next/link'


// LINKS FOR THE HEADER
import Links from '../Links/Links'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'



import './Toolbar.scss'




const toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo">
                <Link href="/">
                    <a>The LOGO</a>
                </Link>
            </div>
            <div className="u-spacer" />
            <div className="toolbar__navigation-items">
                <Links />
            </div>
        </nav>
    </header>
)

export default toolbar