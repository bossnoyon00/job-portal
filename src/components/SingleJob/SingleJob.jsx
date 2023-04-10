import React from 'react';

const SingleJob = (props) => {
    const { name, description, img } = props.job;
    console.log(img);

    return (
        <div className='bg-slate-100 border-yellow-400 p-3 rounded'>
            <div className='ml-28 font-bold'>
                <img className='text-blue-500' src={img} alt="" />
            </div>
            <h2 className='text-3xl text-purple-800'>{name}</h2>
            <p className=''>{description}</p>
        </div>
    );
};

export default SingleJob;