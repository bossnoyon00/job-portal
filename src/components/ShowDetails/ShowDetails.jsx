import React from 'react';
import { Link } from 'react-router-dom';

const ShowDetails = (props) => {
    console.log(props.item.name);
    return (
        <div className='flex justify-between mb-20 gap-10'>
            <div className='flex gap-10'>
                <img src={props.item.logo} alt="" />
                <div>
                    <h2 className='text-3xl'>{props.item.title}</h2>
                    <h2 className='text-2xl'>{props.item.name}</h2>
                    <p className=''>Location:{props.item.location}</p>
                </div>
            </div>
            <Link> <button className='btn btn-primary'>View details</button></Link>
        </div>
    );
};

export default ShowDetails;