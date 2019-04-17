import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <div className="main">
                <section className="row-fluid row center-text text-center twin-hero">
                    <div className="hero-shadow"></div>
                    <div className="hero-container">
                        <div className="left-hero">
                            <div className="left-hero-tilt left-hero-tilt-expanded">
                                <div className="side-container">
                                    <div class="initial active">
                                        <h2>For Customers</h2>
                                        <p>
                                            Amet voluptate consectetur anim do est do ut in ad.
                                            Amet voluptate consectetur anim
                                        </p>
                                        <span class="round-icon">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}

export default Main;