import Hero from "../components/Hero.jsx";
import Homecard from "../components/Homecard.jsx";
import JobListing from "../components/JobListing.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";
const Homepage = () => {
    return(
        <>
            <Hero/>
            <Homecard/>
            <JobListing isHome={true}/>
            <ViewAllJobs/>
        </>
    )
}
export default Homepage