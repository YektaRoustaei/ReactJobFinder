// import './main.css'
import { NavLink } from 'react-router-dom';
import JobLogo from '../assets/images/job.svg';

const Navbar = () => {
    const linkClass =({isActive})=> isActive ? '  bg-blue-950 text-white block py-2 px-3 rounded  md:p-0 dark:text-white bg-indigo-600 ' :'  bg-blue-950 text-white  hover:text-blue-500'
    return (
        <>
            <nav className="bg-blue-950 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={JobLogo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            JobFinder
                        </span>
                    </a>

                    <div className="hidden w-full md:block md:w-auto bg-blue-950" id="navbar-default">
                        <ul className="  bg-blue-950 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={linkClass}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/jobs"
                                    className={linkClass}                                >
                                    Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add-job"
                                    className={linkClass}                                >
                                    Add Job
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
