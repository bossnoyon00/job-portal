import React, { useEffect, useState } from 'react';
import { Link, json, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [details, setDetails] = useState({});
    const { jobId } = useParams();
    // console.log(detail);
    // const detailId = detail.id;
    const jobs = useLoaderData();
    useEffect(() => {
        const detailsData = jobs.find(dt => dt.id == jobId)
        setDetails(detailsData)
    }, []);
    const { title, name, logo, id, education, experience, salary, jobDescription, jobResponsibility, phone, RemoteOrOnSIte, fulltimeOrPartTime, email, location } = details;
    const handleApplyBtn = () => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || {};
        const newJob = {
            id: id,
            logo: logo,
            title: title,
            name: name,
            fulltimeOrPartTime: fulltimeOrPartTime,
            salary: salary,
            RemoteOrOnSIte: RemoteOrOnSIte,
            location: location,
        }
        const updatedJobs = { ...appliedJobs, [id]: newJob }
        localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs))
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
                <div>
                    <h2 className='text-2xl text-center'>Job Details</h2>
                    <hr />
                    <div>
                        <p className='font-bold'>Salary: {salary}</p>
                        <p className='font-bold'>Job title: {title}</p>

                        <div className='mt-10'>
                            <p className='mb-2 font-bold'>Contact information</p>
                            <hr />
                            <p className='font-bold'>Phone: {phone}</p>
                            <p className='font-bold'>Email: {email}</p>
                            <p className='font-bold'>Address : {location}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyBtn} className='w-full mx-auto mt-16 btn btn-primary'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;