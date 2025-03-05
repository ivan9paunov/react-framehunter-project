import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
// import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';

import './styles.css';

function App() {
    return (
        <div className='page-container'>
            <Header />
            <div className='content-wrap'>
                {/* <Home /> */}
                <Login />
            </div>
            <Footer />
        </div>
    );
}

export default App;
