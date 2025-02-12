import { Link } from "react-router-dom";
import classes from './HomePage.module.css';

function HomePage()
{
    return(

        <main className={classes.main}>
        <h1>Welcome</h1>
        <p>This is a simple Coupon details app which provide the facility to store and view Coupon details</p>
        <p>To view the list <Link to = '/CouponList'>click here</Link></p>
        </main>
    );
}

export default HomePage;