export default function ProductItem({title,id})
{
    return (
        <li>
        <h2>{title}</h2>
        <p>{id}</p>
        </li>
    );

}