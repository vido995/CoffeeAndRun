import React from 'react';

class Workflow extends React.Component {
    render () {
        return (
            <div className="workflow-container">
                <div className="workflow-header-left">
                    Proces za korisnike
                </div>
                <div className="workflow-items-left opacity-no">
                    <div className="workflow-items-left-container">
                        <span className="workflow-item">
                            <i>CNR</i>
                            <span className="workflow-item-text">Preuzmi aplikaciju</span>
                        </span>
                        <span className="workflow-arrow-right">
                            <span>&gt;</span>
                        </span>
                        <span className="workflow-item">
                            <i className="fas fa-mobile-alt fa15"></i>
                            <span className="workflow-item-text">Napravi nalog</span>
                        </span>
                        <span className="workflow-arrow-right">
                            <span>&gt;</span>
                        </span>
                        <span className="workflow-item">
                            <i className="fas fa-store"></i>
                            <span className="workflow-item-text">Izaberi kafić</span>
                        </span>
                        <span className="workflow-arrow-right">
                            <span>&gt;</span>
                        </span>
                    </div>
                </div>
                <div className="workflow-header-right">
                    Proces za kafiće
                </div>
                <div className="workflow-items-right opacity-no">
                    <div className="workflow-items-right-container">
                        <span className="workflow-arrow-left">
                            <span>&lt;</span>
                        </span>
                        <span className="workflow-item">
                            <i className="fas fa-coffee fa15"></i>
                            <span className="workflow-item-text">Pripremi porudžbinu</span>
                        </span>
                        <span className="workflow-arrow-left">
                            <span>&lt;</span>
                        </span>
                        <span className="workflow-item">
                            <i className="fas fa-check-square fa15"></i>
                            <span className="workflow-item-text">Prihvati porudžbinu</span>
                        </span>
                        <span className="workflow-arrow-left">
                            <span>&lt;</span>
                        </span>
                        <span className="workflow-item">
                            <i className="fas fa-mobile-alt fa15"></i>
                            <span className="workflow-item-text">Primi porudžbinu</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workflow;