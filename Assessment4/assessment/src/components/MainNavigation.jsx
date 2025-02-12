import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation()
{
    return(
        <header>
            <nav className={classes.nav}>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/CouponList'>CouponList</Link></li>
            </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;