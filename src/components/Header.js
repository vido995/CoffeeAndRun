import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="header-container">
                <div className="fullscreen-video-wrap">
                    <video src="https://www.videvo.net/videvo_files/converted/2016_10/preview/161021_02_CoffeeShop_ManDrinkingCoffee_1080p.mp473975.webm"
                    autoPlay loop muted id="myVideo"></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-container__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Coffee And Run</span>
                        <span className="heading-primary--sub">Savršena šoljica kafe za poneti na jedan klik</span>
                    </h1>
                </div>
            </header>
        )
    }
}

export default Header;