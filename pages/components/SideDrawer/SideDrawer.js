import React from 'react'

// LINKS FOR THE HEADER
import Links from '../Links/Links'


import './SideDrawer.scss'

const SideDrawer = (props) => {

    let drawerClasses  = 'side-drawer'

    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <Links />
        </nav>
    )
}

export default SideDrawer