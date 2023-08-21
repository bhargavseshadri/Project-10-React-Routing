import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([     //function used to define our routes
                            //these objects are our routes
    {                        //its a special route
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        { index:true , element: <Homepage/> },                     //this one is for our "main page",so when this route becomes active the Home.js component should load
        { path: 'products', element: <ProductsPage/>},
        {path: 'products/:productId',element:<ProductDetailsPage/>}      //here we give the dynamic path using :.
      ]
    },
  ]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
