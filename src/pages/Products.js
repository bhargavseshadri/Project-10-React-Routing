import { Link } from "react-router-dom";

const PRODUCTS = [            //in reality we get this from backend database
    {id: 'p1', title: 'product1'},
    {id: 'p2', title: 'product2'},
    {id: 'p3', title: 'product3'}

];

const ProductsPage = () => {
    console.log("hi bro");
    return <>
            <h1>Products PAGE</h1>
            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={prod.id}>{prod.title}</Link>
                    </li>
                ))}



                {/* <li><Link>Product 1</Link></li>
                <li><Link>Product 2</Link></li>
                <li><Link>Product 3</Link></li> */}

            </ul>
    </>
};

export default ProductsPage;