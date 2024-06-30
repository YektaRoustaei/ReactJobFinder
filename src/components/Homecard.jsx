import Card from "./Card.jsx"
const Homecard = () =>{


    return (
        <section className='py-4'>
            <div className='container lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg'>
                    <Card
                        bg_color = 'bg-blue-100'
                        title =' For developers'
                        text ='Browse the React jobs today'
                        buttonName='Browse jobs'
                    />
                    <Card
                        bg_color = 'bg-gray-100'
                        title =' For Employers'
                        text ='List your job to find developers'
                        buttonName='Add jobs'
                    />
                </div>
            </div>

        </section>)
};
export default Homecard;