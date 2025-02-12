import { useParams } from "react-router-dom";

export default function ProductViewPage()
{
    const params = useParams();
    const id = params.ProductId;
    return (
        <>
        <h2>Product</h2>
        <p>{id}</p>
        </>

    );
}