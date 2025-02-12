import { Link } from "react-router-dom";

export default function HomePage()
{
    return(
        <div >
            <h1>Hello This is HomePage</h1>
            <Link to = '/products'><p>products page</p></Link>
        </div>
    );
}