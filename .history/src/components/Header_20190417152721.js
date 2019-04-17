import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="car-header">
                <div>
                    <a className="car-logo">Coffee And Run</a> 
                    <div className="container-centered"></div>
                </div>
            </header>
        )
    }
}

export default Header;