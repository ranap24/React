import { Link } from "react-router-dom";

function MainHeader()
{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to='/form'>form</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default MainHeader;