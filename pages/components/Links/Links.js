import React from 'react';
import Link from 'next/link'


const links = (params) => (
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
)

export default links