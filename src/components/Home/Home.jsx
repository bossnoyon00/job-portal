import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;