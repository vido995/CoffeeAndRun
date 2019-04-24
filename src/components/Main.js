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
                            <div className={"left-hero-tilt " + "left-hero-tilt-" + this.state.customerState}>
                                <div className="side-container">
                                    <div className={"initial " + (this.state.customerState === "initial" ? "active" : "")}>
                                        <h2>For Customers</h2>
                                        <p>
                                            Amet voluptate consectetur anim do est do ut in ad.
                                            Amet voluptate consectetur anim
                                        </p>
                                        <span className="round-icon"  onClick={() => this.setState({customerState: "expanded", bussinessState: "collapsed"})}>&#8680;</span>
                                    </div>
                                    <div className={"collapsed " + (this.state.customerState === "collapsed" ? "active" : "")}>
                                        <h2>Customers</h2>
                                        <span className="round-filled-icon" onClick={() => this.setState({customerState: "initial", bussinessState: "initial"})}>&#8680;</span>
                                    </div>
                                    <div className={"expanded " + (this.state.customerState === "expanded" ? "active" : "")}>
                                        <h2>Personal</h2>
                                        <p>Amet voluptate consectetur anim do est do ut in ad.</p>
                                        <div className="hero-twin-items">
                                            <div className="hero-twin-item">
                                                <i className="fas fa-check-circle fa-5x"></i>
                                                <p>Send money to friends and family or move funds from one account to another.*</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <p>Expand your payment options with our credit, debit, prepaid cards &amp; PayPal Credit.**</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <p>Check out faster, at any of the millions of sites PayPal is accepted.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"right-hero " + "right-hero-" + this.state.bussinessState}>
                            <div className={"right-hero-tilt " + "right-hero-tilt-" + this.state.bussinessState}>
                                <div className="side-container">
                                    <div className={"initial " + (this.state.bussinessState === "initial" ? "active" : "")}>
                                        <h2>For Bussiness</h2>
                                        <p>
                                            Amet voluptate consectetur anim do est do ut in ad.
                                            Amet voluptate consectetur anim
                                        </p>
                                        <span className="round-icon" onClick={() => this.setState({customerState: "collapsed", bussinessState: "expanded"})}>&#8678;</span>
                                    </div>
                                    <div className={"collapsed " + (this.state.bussinessState === "collapsed" ? "active" : "")}>
                                        <h2>Bussiness</h2>
                                        <span className="round-filled-icon" onClick={() => this.setState({customerState: "initial", bussinessState: "initial"})}>&#8678;</span>
                                    </div>
                                    <div className={"expanded " + (this.state.bussinessState === "expanded" ? "active" : "")}>
                                        <div>RASIRENO</div>
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