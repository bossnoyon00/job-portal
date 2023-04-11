import React, { useEffect, useState } from 'react';
import ShowDetails from '../ShowDetails/ShowDetails';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';

const Details = () => {
    const job = useLoaderData();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const storedJobs = getShoppingCart();
        let jobLists = [];
        for (const id in storedJobs) {
            const foundJob = job.find(data => data.id == id);
            if (foundJob) {
                jobLists.push(foundJob)
            }
        } setJobs(jobLists)
    }, [job])
    console.log(jobs);
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-3xl text-center'>Applied Job</h2>
            <div className=''>
                {
                    jobs.map((item, index) => <ShowDetails key={index} item={item}></ShowDetails>)
                }
            </div>
        </div>
    );
};

export default Details;