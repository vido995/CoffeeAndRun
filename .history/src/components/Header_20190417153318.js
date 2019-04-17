import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="car-header">
                <div>
                    <div className="container-centered">
                        <a className="car-logo">Coffee And Run</a> 
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;