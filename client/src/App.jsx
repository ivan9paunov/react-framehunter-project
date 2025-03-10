import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import FrameCatalog from './components/frame-catalog/FrameCatalog.jsx';
import FrameAdd from './components/frame-add/FrameAdd.jsx';
// import FrameEdit from './components/frame-edit/FrameEdit.jsx';
import FrameDetails from './components/frame-details/FrameDetails.jsx';
// import PageNotFound from './components/page-not-found/PageNotFound.jsx';
// import ServerError from './components/server-error/ServerError.jsx';

import '../public/styles/styles.css';

function App() {
    return (
        <div className='page-container'>
            <Header />
            <div className='content-wrap'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/frames' element={<FrameCatalog />} />
                    <Route path='/details/:id' element={<FrameDetails />} />
                    <Route path='/frames/create' element={<FrameAdd />} />
                
                {/* <FrameEdit /> */}
                {/* <PageNotFound /> */}
                {/* <ServerError /> */}
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
