const Card = ({title,text,buttonName,bg_color})=>{
    return(
        <>
            <div className={`${bg_color} rounded-lg p-6`}>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className='py-2 px-2 bg-indigo-600 rounded-xl'>{buttonName}</button>
            </div>
        </>
    )
};
export default Card;
