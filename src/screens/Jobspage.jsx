import JobListing from "../components/JobListing.jsx";
import jobs from "../jobs.json";
const Jobspage = ({isHome = false}) => {

    return(
        <section>
        <JobListing/>
        </section>
    )
}
export default Jobspage