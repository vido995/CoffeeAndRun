import React from 'react';

class Workflow extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
        let container = document.getElementsByClassName('workflow-container')[0];
        let items = document.getElementsByClassName('workflow-items-left')[0];
        console.log(window.pageYOffset >= container.offsetTop)
        if (window.pageYOffset >= container.offsetTop) {
            items.classList.remove('opacity-no');
            let item = items.getElementsByClassName('workflow-item');
            let arrowRight = items.getElementsByClassName('workflow-arrow-right');
            item[0].classList.add('workflow-item--first');
            let itemText = item[0].getElementsByClassName('workflow-item-text')[0];
            itemText.classList.add('workflow-item-text--first');
            arrowRight[0].classList.add('workflow-arrow-right--first');
            item[1].classList.add('workflow-item--second');
            itemText = item[1].getElementsByClassName('workflow-item-text')[0];
            itemText.classList.add('workflow-item-text--second');
            item[2].classList.add('workflow-item--3');
            itemText = item[2].getElementsByClassName('workflow-item-text')[0];
            itemText.classList.add('workflow-item-text--3');
        }
    }

    render () {
        return (
            <div className="workflow-container">
                <div className="workflow-items-left opacity-no">
                    <span className="workflow-item">
                        CNR
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
                        <i class="fas fa-store"></i>
                        <span className="workflow-item-text">Izaberi kafić</span>
                    </span>
                </div>
                <div className="workflow-items-right">
                    {/* <span className="workflow-item">
                        <i className="fas fa-mobile-alt fa15"></i>
                    </span> */}
                </div>
            </div>
        )
    }
}

export default Workflow;