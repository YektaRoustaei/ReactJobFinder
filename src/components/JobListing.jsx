import {useEffect, useState} from "react";
import Job from "./Job.jsx";
import SpinnerLoader from "./SpinnerLoader.jsx";

const JobListing = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    // show spinner during loading
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs = async () => {
            const apiUrl = isHome ?'/api/jobs?_limit=3':'/api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);

            }catch(error){
                 console.log('error fetching jobs',error);
            }
            finally {
                setLoading(false)
            }

        }
        fetchJobs();},
        [])
    return (
        <>
            <div className='bg-blue-100'>
                <h1 className='text-center text-indigo-500 font-bold'>
                    {isHome ? ' Browse Jobs' : 'All Jobs'}
                </h1>
                    {loading ? (<SpinnerLoader loading={loading}/> ):(
                        <>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                            {jobs.map((job) =>(
                                <Job job={job} key={job.id}/>

                            ))}
                        </div>
                        </>
                    )}



            </div>

        </>
    )

};
export default JobListing;