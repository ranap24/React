import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {
        id : 'P1',
        title : 'Product!'
    },
    {
        id : 'P2',
        title : 'Product!'
    },
    {
        id : 'P3',
        title : 'Product!'
    }

];

export default function ProductList()
{
    return(
        <ul>
        {DUMMY_PRODUCTS.map((product)=><li key = {product.id}><Link to ={ `${product.id}`}>{product.title}</Link></li>)}
        </ul>
    );
}