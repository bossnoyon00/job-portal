import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import { useLoaderData, useParams } from 'react-router-dom';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const HeaderPart = () => {
    const feature = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        fetch("job.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className='mt-5  px-12 py-5 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='md:flex justify-between items-center'>
                <div>
                    <h2 className='text-4xl md:text-6xl font-bold mb-4'> One Step <br /> Closer To Your <br /> <span style={{ color: 'rgba(126, 144, 254, 1)' }} className='text-blue-400 font-bold'>Dream Job</span></h2>
                    <button className='btn mt-2 btn-secondary'>Get Started</button>
                </div>
                <div className='md:w-1/2'>
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

                    <div className='grid gap-5 md:grid-cols-2'>
                        {
                            show ? feature.slice(0, 4).map((feature, index) => <FeatureDetail
                                key={index}
                                feature={feature}
                            ></FeatureDetail>) : feature.map((feature, index) => <FeatureDetail
                                key={index}
                                feature={feature}
                            ></FeatureDetail>)
                        }
                    </div>
                </div>
                <div>
                    {
                        show ? <button onClick={() => setShow(!show)} className='btn btn-primary'>see More</button> :
                            <button onClick={() => setShow(!show)} className='btn btn-primary'>see Less</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderPart;