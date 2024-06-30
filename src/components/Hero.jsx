const Hero = ({subtitle ='Become React dev'})=>{
    return(
        <>
         <section className='bg-blue-100'>
             <div className="text-center">
                  <h2 className='text-3xl font-bold'>
                      {subtitle}
                  </h2>
                 <p>
                     find job related to your skills
                 </p>
             </div>
         </section>
        </>
    )
};
export default Hero;
