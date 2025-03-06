import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
// import Home from './components/home/Home.jsx';
// import Login from './components/login/Login.jsx';
// import Register from './components/register/Register.jsx';
// import FrameAdd from './components/frame-add/FrameAdd.jsx';
// import FrameEdit from './components/frame-edit/FrameEdit.jsx';

import '../public/styles/styles.css';
import FrameCatalog from './components/frame-catalog/FrameCatalog.jsx';

function App() {
    return (
        <div className='page-container'>
            <Header />
            <div className='content-wrap'>
                {/* <Home /> */}
                {/* <Login /> */}
                {/* <Register /> */}
                {/* <FrameAdd /> */}
                {/* <FrameEdit /> */}
                <FrameCatalog />
            </div>
            <Footer />
        </div>
    );
}

export default App;
