import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;