import React from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ErrorPage = () => {
    const navigation = useNavigation();
    return (
        <div className='px-4 text-center py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div>
                {navigation.state === 'loading' && <Spinner></Spinner>}
            </div>
            <div className='mt-40'>
                <h1 className='text-4xl text-red-900'>
                    <b>404</b></h1>
                <h1 className='text-5xl text-orange-700'>This Site is not Available!!!
                </h1>
            </div>
        </div>
    );
};

export default ErrorPage;