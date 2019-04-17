import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="car-header">
                <div>
                    <div className="container-centered">
                        <a className="car-logo">Coffee And Run</a> 
                        <nav className="main-menu">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Home</a></li>
                                <li><a>Home</a></li>
                                <li><a>Home</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;