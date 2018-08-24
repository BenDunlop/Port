import React from 'react'
import LinksNav from '../Links/Links'

import './SideDrawer.scss'

const SideDrawer = (props) => {

    let drawerClasses  = 'side-drawer'

    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <LinksNav />
        </nav>
    )
}

export default SideDrawer