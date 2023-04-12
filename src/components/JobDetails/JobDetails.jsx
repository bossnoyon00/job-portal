import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakeDb';
import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const JobDetails = () => {
    const [details, setDetails] = useState({});
    const { jobId } = useParams();
    const jobs = useLoaderData();
    useEffect(() => {
        const detailsData = jobs.find(dt => dt.id == jobId);
        setDetails(detailsData);
    }, []);
    const { title, id, education, experience, salary, jobDescription, jobResponsibility, phone, email, location } = details;
    const handleApplyBtn = (id) => {
        addToDb(id);
    }
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-3xl text-center font-bold'>Job Details</h2>
            <div className='grid mt-24 md:grid-cols-2 md:gap-96'>
                <div className='card flex justify-center items-center mt-10'>
                    <p className=''><span className='font-bold'>Job Description:</span> {jobDescription}</p>
                    <p className='my-5'><span className='font-bold'>Job Responsibility :</span> {jobResponsibility}</p>
                    <p className='my-5'><span className='font-bold my-5'>Education : </span> <br /> {education}</p>
                    <p className='my-5'><span className='font-bold'>Experience :</span> <br />{experience}</p>
                </div>
                <div className='bg-gray-500 rounded p-6'>
                    <h2 className='text-3xl font-bold p-6 text-yellow-400 text-center'>Job Details</h2>
                    <hr />
                    <div>
                        <div className='flex'>
                            <CurrencyDollarIcon className='w-5'></CurrencyDollarIcon>
                            <p className='font-bold'> {salary}</p>
                        </div>
                        <div className='flex'>
                            <BriefcaseIcon className='w-5'></BriefcaseIcon>
                            <p className='font-bold'>Job title: {title}</p>
                        </div>

                        <div className='mt-10'>
                            <p className='mb-2 font-bold'>Contact information</p>
                            <hr />
                            <div className='flex'>
                                <PhoneIcon className='w-5'></PhoneIcon>
                                <p className='font-bold'>Phone: {phone}</p>
                            </div>
                            <div className='flex'>
                                <EnvelopeIcon className='w-5'></EnvelopeIcon>
                                <p className='font-bold'>Email: {email}</p>
                            </div>
                            <div className='flex'>
                                <MapPinIcon className='w-5'></MapPinIcon>
                                <p className='font-bold'>Address: {location}</p>
                            </div>
                        </div>
                    </div>
                    <button style={{ backgroundColor: 'rgba(126, 144, 254, 1)' }} onClick={() => handleApplyBtn(id)} className='w-full mx-auto mt-16 btn btn-primary'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;