import React from 'react';

const FeatureDetail = (props) => {
    const { name, logo, title, salary, jobType, location } = props.feature;
    return (
        <div className='card flex justify-center items-center mt-10'>
            <img className='w-40' src={logo} alt="" />
            <h3 className='text-4xl'>{title}</h3>
            <h2 className='text-3xl'>{name}</h2>
            <h5>Job type: {jobType}</h5>
            <div className='flex gap-5'>
                <p>{location} </p>
                <p>salary: ${salary}</p>
            </div>
            <button className='btn btn-success'>View Details</button>
        </div>
    );
};

export default FeatureDetail;