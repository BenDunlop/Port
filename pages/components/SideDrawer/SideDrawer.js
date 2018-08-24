import React from 'react'
import Link from 'next/link'

import './SideDrawer.scss'

const SideDrawer = (props) => {

    let drawerClasses  = 'side-drawer'

    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        <a>Users</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer