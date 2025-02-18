import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './screens/HomePage';
import JobsPage from './screens/JobsPage';
import NotFoundPage from './screens/NotFound';
import JobPage, { jobLoader } from './screens/JobPage';
import AddJobPage from './screens/AddJobPage';
import EditJobPage from './screens/EditJobPage';

const App = () => {
    // Add New Job
    const addJob = async (newJob) => {
        await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        });
    };

    // Delete Job
    const deleteJob = async (id) => {
        await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
    };

    // Update Job
    const updateJob = async (job) => {
        await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        });
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='jobs' element={<JobsPage />} />
                <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route
                    path='edit-job/:id'
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path='jobs/:id'
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
