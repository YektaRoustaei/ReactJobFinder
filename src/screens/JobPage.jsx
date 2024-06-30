import { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";
import SpinnerLoader from "../components/SpinnerLoader.jsx";
import Job from "../components/Job.jsx";
import React from 'react';
import { FaLocationPin } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
    const { id } = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();

    const onDeleteJob = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this job?");
        if (confirm) {
            deleteJob(id);
            toast.success('Job deleted successfully');
            navigate('/jobs');
        }
    };

    return (
        <section className="p-4">
            <div className="w-full max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow-lg bg-white">
                    <div className="text-left p-4 border-r">
                        <div className="mb-4">
                            <p className="text-gray-500">Job type: {job.type}</p>
                            <h1 className="font-extrabold text-2xl">{job.title}</h1>
                        </div>
                        <div className="border-2 p-4 rounded-lg">
                            <p className="text-indigo-500 font-bold">Job Description</p>
                            <p className="font-light">{job.description}</p>
                            <div className="text-orange-700 mt-5">
                                <FaLocationPin className="inline mr-2" />
                                <span>{job.location}</span>
                            </div>
                            <p>{job.salary} / Year</p>
                        </div>
                    </div>
                    <div className="border-2 p-4 rounded-lg">
                        <p className="text-indigo-500 font-extrabold">Company Info</p>
                        <p className="font-bold">Name: {job.company.name}</p>
                        <p className="font-light mb-4">{job.company.description}</p>
                        <p>Contact mail:</p>
                        <div className="bg-indigo-100 h-8 text-center m-2 flex items-center justify-center rounded">
                            <a href={`mailto:${job.company.contactEmail}`} className="text-indigo-600">{job.company.contactEmail}</a>
                        </div>
                        <p>Contact Phone:</p>
                        <div className="bg-indigo-100 h-8 text-center m-2 flex items-center justify-center rounded">
                            <a href={`tel:${job.company.contactPhone}`} className="text-indigo-600">{job.company.contactPhone}</a>
                        </div>
                    </div>
                </div>

                <div className="text-center p-4 mt-4">
                    <p className="mb-2 font-bold">Job Management</p>
                    <div className="flex justify-center space-x-4">
                        <Link to={`/edit-jobs/${job.id}`} className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-xl">Edit Post</Link>
                        <button onClick={() => onDeleteJob(job.id)} className="bg-red-700 text-white font-bold py-2 px-6 rounded-xl">Delete Post</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};

export { JobPage as default, jobLoader };
