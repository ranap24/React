import { Link } from "react-router-dom";
import ProductList from './ProductList';

export default function ProductsPage()
{
    return (
        <div >
            <h1>This is Products Page</h1>
            <ProductList/>
        </div>
    );
}