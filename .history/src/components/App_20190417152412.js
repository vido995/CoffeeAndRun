import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <div className='coffee-and-run'>
                <Header />
                {/* <Main />
                <Footer  /> */}
            </div>
        )
    }
}

export default App;