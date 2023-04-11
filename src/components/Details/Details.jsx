import React from 'react';
import ShowDetails from '../ShowDetails/ShowDetails';

const Details = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'));
    const items = Object.values(appliedJobs);
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='flex flex-col'>
                {
                    items.map((item, index) => <ShowDetails key={index} item={item}></ShowDetails>)
                }
            </div>
        </div>
    );
};

export default Details;