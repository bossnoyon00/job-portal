import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import { useLoaderData, useParams } from 'react-router-dom';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const HeaderPart = () => {
    const feature = useLoaderData();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("job.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className='mt-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='md:flex justify-between mx-auto w-full items-center'>
                <div>
                    <h2 className='text-3xl'> One Step <br /> Closer To Your <br /> <span className='text-blue-400 font-bold'>Dream Job</span></h2>
                    <button className='btn mt-2 btn-secondary'>Get Started</button>
                </div>
                <div className='w-1/2'>
                    <img className='' src="https://i.ibb.co/TKBBk0Q/P3-OLGJ1-copy-1.png" alt="" />
                </div>
            </div>

            <div className='text-center mt-16'>
                <h2 className='text-5xl mb-3'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid md:grid-cols-4 mt-10 gap-10'>
                    {
                        jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                    }
                </div>
                <div className='my-6'>
                    <h2 className='text-5xl mb-3'>Featured Job</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

                    <div className='grid md:grid-cols-2'>
                        {
                            feature.map((feature, index) => <FeatureDetail
                                key={index}
                                feature={feature}
                            ></FeatureDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPart;