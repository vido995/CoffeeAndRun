import React from 'react';

class Main extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            customerState: "initial",
            bussinessState: "initial"
        };
    }

    render () {
        return (
            <div className="main">
                <section className="row-fluid row center-text text-center twin-hero">
                    <div className="hero-shadow"></div>
                    <div className="hero-container">
                        <div className={"left-hero " + "left-hero-" + this.state.customerState}>
                            <div className="left-hero-tilt left-hero-tilt-expanded">
                                <div className="side-container">
                                    <div className={"initial " + (this.state.customerState === "initial" ? "active" : "")}>
                                        <h2>For Customers</h2>
                                        <p>
                                            Amet voluptate consectetur anim do est do ut in ad.
                                            Amet voluptate consectetur anim
                                        </p>
                                        <span className="round-icon"  onClick={() => this.setState({customerState: "expanded", bussinessState: "collapsed"})}>+</span>
                                    </div>
                                    <div class={"collapsed " + (this.state.customerState === "collapsed" ? "active" : "")}>
                                        <h2>Customers</h2>
                                        <span class="round-filled-icon" onClick={() => this.setState({customerState: "initial", bussinessState: "initial"})}>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"right-hero " + "right-hero-" + this.state.bussinessState}>
                            <div className="right-hero-tilt right-hero-tilt-expanded">
                                <div className="side-container">
                                    <div className={"initial " + (this.state.bussinessState === "initial" ? "active" : "")}>
                                        <h2>For Bussiness</h2>
                                        <p>
                                            Amet voluptate consectetur anim do est do ut in ad.
                                            Amet voluptate consectetur anim
                                        </p>
                                        <span className="round-icon" onClick={() => this.setState({customerState: "collapsed", bussinessState: "expanded"})}>+</span>
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