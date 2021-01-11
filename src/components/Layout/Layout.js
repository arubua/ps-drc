import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';


const Layout = ({children}) => (
    
    <div className="mx-4 my-3">
        <Header/>
        <Menu/>
        {children}
        <Footer/>
    </div>
    
    
    );

export default Layout;