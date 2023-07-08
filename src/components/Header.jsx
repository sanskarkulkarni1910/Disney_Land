import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between ">
                <img src={require('../assets/img/disney8.png')} width="180" height="160" alt="logo"/>
                    <Link to={"/"}><a  class="logo d-flex align-items-center me-auto me-lg-0">
                    </a>
                    </Link>

                    <nav id="navbar" class="navbar">
                        <ul>
                        <Link to={'/'}> <button className='rounded-pill m-2 p-2 bg-warning'><a >Home</a></button></Link>
                             <Link to={'/museum'}> <button className='rounded-pill p-2 m-2 bg-warning'><a >Parks and Tickets</a></button></Link>
                            <Link to={'/store'}><button className='rounded-pill p-2 m-1 bg-warning'><a>Places To stay</a></button></Link>
                            <Link to={'/chefs'}><button className='rounded-pill p-2 m-1 bg-warning'><a>Things To Do</a></button></Link>
                            <Link to={'/special'}><button className='rounded-pill p-2 m-1 bg-warning'><a>Special Offer</a></button></Link>
                            <Link to={'/contact'}><button className='rounded-pill p-2 m-1 bg-warning'><a>Contact</a></button></Link>
                        </ul>
                    </nav>
                    

                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
        </div>
    )
}
