import{useState} from "react";
import {FaMapMarker} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Job= ({job}) => {
    const [showFullDescription,setShowFullDescription]= useState(false);
    let description = job.description;
    if(!showFullDescription){
        description = description.substring(0,90) +'...'
    }
    return(
        <div className='bg-white rounded-xl shadow-md relative grid-cols-3'>
            <p className='text-gray-600 my-2 p-4'>
                {job.type}
            </p>
            <div className='p-4' >
            <p className='text-xl font-bold'>{job.title}</p>
            <p className='text-gray-600 my-2 mb-5'>{description}</p>
                <button onClick={() => setShowFullDescription((prevState)=>!prevState)} className='text-indigo-500 mb-5 hover:text-indigo-600' > {showFullDescription ? 'less' : 'more'}</button>
            <p className='text-indigo-500'>{job.salary}</p>
            </div>
            <div className='border border-gray-500 mb-5 m-2 p-1 rounded-lg pb-2'>
                <p className='text-orange-700 mb-3'>
                    <FaMapMarker className='inline text-lg mb-1 mr-1 '/>
                    {job.location}</p>
                <Link className='rounded-lg bg-indigo-600 text-white h-[36px]  text-center text-sm py-2 px-2  ' to={`/jobs/${job.id}`}>Read more</Link>
            </div>


        </div>
    )
}
export default Job