import React, { useEffect, useState } from 'react';
import ShowDetails from '../ShowDetails/ShowDetails';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';

const Details = () => {
    const job = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        const storedJobs = getShoppingCart();
        let jobLists = [];
        for (const id in storedJobs) {
            const foundJob = job.find(data => data.id == id);
            if (foundJob) {
                jobLists.push(foundJob)
            }
        } setJobs(jobLists);
        setFilter(jobLists);
    }, [job])

    const handleFilterBy = (e) => {
        // console.log(e.target.value);
        let filteredItem = e.target.value;
        let filteredJob;
        if (filteredItem === 'All') {
            setFilter(jobs);
        }
        else if (filteredItem === 'Remote') {
            filteredJob = jobs.filter(data => data.RemoteOrOnSIte === filteredItem);
            setFilter(filteredJob);
        }
        else if (filteredItem === 'Onsite') {
            filteredJob = jobs.filter(data => data.RemoteOrOnSIte === filteredItem);
            setFilter(filteredJob);
        }
    }
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-3xl text-green-700 text-center'>Applied Job</h2>
            <hr />
            <div className='w-3/4 mx-auto mb-32'>
                <div className='text-end mb-5'>
                    <select onChange={handleFilterBy} className='border-purple-500 border rounded-md'>
                        <option selected>Filter By</option>
                        <option value='Remote'>Remote</option>
                        <option value='Onsite'>Onsite</option>
                        <option value='All'>All</option>
                    </select>
                </div>
            </div>
            <div className=''>
                {
                    filter.map((item, index) => <ShowDetails key={index} item={item}></ShowDetails>)
                }
            </div>
        </div>
    );
};

export default Details;