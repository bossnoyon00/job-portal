import React from 'react';
import { Link } from 'react-router-dom';

const ShowDetails = ({ item }) => {
    console.log(item);
    const { logo, title, salary, name, RemoteOrOnSIte, fulltimeOrPartTime, location, id } = item;
    console.log(id);
    return (
        <div className='md:flex justify-between mt-10 mb-20 gap-10'>
            <div className='md:flex gap-10'>
                <img src={logo} alt="" />
                <div>
                    <h2 className='text-3xl'>{title}</h2>
                    <h2 className='text-2xl'>{name}</h2>
                    <div className='md:flex my-3 gap-6'>
                        <button className='border-solid border border-x-stone-600 px-5'>{RemoteOrOnSIte}</button>
                        <button className='border-solid border border-x-stone-600 px-5'>{fulltimeOrPartTime}</button>
                    </div>
                    <div className='md:flex gap-7'>
                        <p className=''>Location:{location}</p>
                        <p>Salary : {salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`}> <button className='btn btn-primary'>View details</button></Link>
        </div>
    );
};

export default ShowDetails;