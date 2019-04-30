import React from 'react';

class Footer extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            customerState: "initial",
            bussinessState: "initial"
        };
    }
    
    render () {
        return (
            <div> 
                <section className="row-fluid row center-text text-center twin-hero">
                    <div className="hero-container">
                        <div className={"left-hero " + "left-hero-" + this.state.customerState}>
                            <div className={"left-hero-tilt " + "left-hero-tilt-" + this.state.customerState}>
                                <div className="side-container">
                                    <div className={"initial " + (this.state.customerState === "initial" ? "active" : "")}>
                                        <h2>CnR za tebe</h2>
                                        <p>Amet voluptate consectetur anim do est do ut in</p>
                                        <span className="round-icon"  onClick={() => this.setState({customerState: "expanded", bussinessState: "collapsed"})}>&#8680;</span>
                                    </div>
                                    <div className={"collapsed " + (this.state.customerState === "collapsed" ? "active" : "")}>
                                        <h2>CnR za tebe</h2>
                                        <span className="round-filled-icon" onClick={() => this.setState({customerState: "expanded", bussinessState: "collapsed"})}>&#8680;</span>
                                    </div>
                                    <div className={"expanded " + (this.state.customerState === "expanded" ? "active" : "")}>
                                        <h2>CnR za tebe</h2>
                                        <p>Amet voluptate consectetur anim do est do ut in</p>
                                        <div className="hero-twin-items">
                                            <div className="hero-twin-item">
                                                <i className="fas fa-clock fa-5x"></i>
                                                <p>Za samo 1 minut</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <i className="far fa-times-circle fa-5x"></i>
                                                <p>Bez čekanja i gužve</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <i className="fas fa-thermometer-three-quarters fa-5x"></i>
                                                <p>savršena temperatura</p>
                                            </div>
                                            <div className="hero-twin-item hero-twin-item-button">
                                                <span className="round-icon round">
                                                    <i className="fab fa-google-play fa-3x"></i>
                                                    <p>Play Store</p>
                                                </span>
                                            </div>
                                            <div className="hero-twin-item hero-twin-item-button left-btn">
                                                <span className="round-icon round">
                                                    <i className="fab fa-apple fa-3x"></i>
                                                    <p>App Store</p>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="round-icon round-icon--small right-corner" onClick={() => this.setState({customerState: "initial", bussinessState: "initial"})}>x</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"right-hero " + "right-hero-" + this.state.bussinessState}>
                            <div className={"right-hero-tilt " + "right-hero-tilt-" + this.state.bussinessState}>
                                <div className="side-container">
                                    <div className={"initial " + (this.state.bussinessState === "initial" ? "active" : "")}>
                                        <h2>CnR za kafiće</h2>
                                        <p>Amet voluptate consectetur anim do est do ut in</p>
                                        <span className="round-icon" onClick={() => this.setState({customerState: "collapsed", bussinessState: "expanded"})}>&#8678;</span>
                                    </div>
                                    <div className={"collapsed " + (this.state.bussinessState === "collapsed" ? "active" : "")}>
                                        <h2>CnR za kafiće</h2>
                                        <span className="round-filled-icon" onClick={() => this.setState({customerState: "collapsed", bussinessState: "expanded"})}>&#8678;</span>
                                    </div>
                                    <div className={"expanded " + (this.state.bussinessState === "expanded" ? "active" : "")}>
                                        <h2>CnR za kafiće</h2>
                                        <p>Amet voluptate consectetur anim do est do ut in</p>
                                        <div className="hero-twin-items" style={{marginLeft: 0}}>
                                            <div className="hero-twin-item">
                                                <i className="fas fa-money-bill-wave fa-5x"></i>
                                                <p>Veći prihod</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <i className="far fa-times-circle fa-5x"></i>
                                                <p>Bez gužve</p>
                                            </div>
                                            <div className="hero-twin-item">
                                                <i className="fas fa-users fa-5x"></i>
                                                <p>lakše do mušterija</p>
                                            </div>
                                            <div className="hero-twin-item hero-twin-item-button" style={{marginLeft: 34 + '%'}}>
                                                <span className="round-icon round">
                                                    <i className="fas fa-phone-square fa-3x" style={{paddingLeft: 0}}></i>
                                                    <p style={{marginLeft: 0.2 + 'rem'}}>Pozovite Nas</p>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="round-icon round-icon--small left-corner" onClick={() => this.setState({customerState: "initial", bussinessState: "initial"})}>x</span>
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

export default Footer;