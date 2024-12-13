// import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl"><img className="w-8" src="https://i.ibb.co/WgzB0tH/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">
                        {coin} Coin
                        <i className="text-yellow-400 fa-solid fa-comment-dollar"></i>
                    </a>
                </div>
            </div>


        </div>
    );
};


export default Header;