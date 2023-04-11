import React from 'react';
import { Link } from 'react-router-dom';

const FeatureDetail = (props) => {

    const { name, logo, id, title, salary, RemoteOrOnSIte, fulltimeOrPartTime, location } = props.feature;

    return (
        <div className='card flex justify-center items-center mt-10'>
            <img className='w-40 my-1' src={logo} alt="" />
            <h3 className='text-4xl my-1'>{title}</h3>
            <h2 className='text-3xl my-1'>{name}</h2>
            <div className='flex my-1 gap-6'>
                <button className='border-solid border border-x-stone-600 px-5'>{RemoteOrOnSIte}</button>
                <button className='border-solid border border-x-stone-600 px-5'>{fulltimeOrPartTime}</button>
            </div>
            <div className='flex my-1 gap-5'>
                <p>{location} </p>
                <p>salary: ${salary}</p>
            </div>
            <Link to={`/job/${id}`}> <button className='btn my-1 btn-success w-full'>View Details</button></Link>
        </div>
    );
};

export default FeatureDetail;