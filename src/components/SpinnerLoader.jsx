import ClipLoader from "react-spinners/ClipLoader";
const override ={
    display:'block',
    margin:'100px auto',
}

const SpinnerLoader = ({loading}) => {
    return(
        <ClipLoader

            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )

}
export default SpinnerLoader;