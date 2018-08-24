import React from 'react';
import Link from 'next/link'

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
                <ul>
                    <li>
                        <Link href="/products">
                            <a>Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a>Users</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar