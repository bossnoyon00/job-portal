import React from 'react';
import { Link } from 'react-router-dom';

const FeatureDetail = (props) => {

    const { name, logo, id, title, salary, RemoteOrOnSIte, fulltimeOrPartTime, location } = props.feature;

    return (
        <div className='card flex p-5 justify-center border border-blue-400 items-center mt-10'>
            <div>
                <img className='w-40 my-1' src={logo} alt="" />
                <h3 className='text-4xl my-1 text-cyan-600'>{title}</h3>
                <h2 className='text-3xl my-1 text-orange-800'>{name}</h2>
                <div className='flex my-1 gap-6 text-amber-500'>
                    <button className='border-solid border border-x-stone-600 px-5'>{RemoteOrOnSIte}</button>
                    <button className='border-solid border border-x-stone-600 px-5'>{fulltimeOrPartTime}</button>
                </div>
                <div className='flex my-1 gap-5'>
                    <p>location: {location} </p>
                    <p>Salary: ${salary}</p>
                </div>
                <Link to={`/job/${id}`}> <button style={{ backgroundColor: 'rgba(126, 144, 254, 1)' }} className='btn text-slate-200 my-1 btn-success w-full'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeatureDetail;