import { Link , useNavigate} from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return <>
            <h1>HOME PAGE</h1>
            <p>
                Go to <Link to="products">List of Products</Link>   {/**in this way we link the pages using Link component provided by react router */}
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
          </>
};

export default Homepage;