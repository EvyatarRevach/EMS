// import React from 'react'
import './style/navBarStyle.css'

export default function NavBar() {
    return (
        <div className='navFather'>
            <nav>
                <a href='/login'>Sign In</a>
                <a href='/register'>Sign Up</a>
                <a href='/orders'>orders</a>
                {/* <a href='/logout'>Logout</a> */}
                <div className='animation start-home'></div>
            </nav>
        </div>
    )
}
