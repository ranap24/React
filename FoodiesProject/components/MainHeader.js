import Link from 'next/link';
import logo from '@/public/images/logo.png';
import classes from './MainHeader.module.css';
import NavLink from './NavLink';

export default function MainHeader()
{
    return (
        <header className={classes.header}>
        <Link href = '/' className={classes.logo}>
            <img src = {logo.src} alt = "Logo of the application" />
            <p>Next level food</p>
        </Link>
        <nav className={classes.nav}>
            <ul>
               <li><NavLink href = '/meals'>browseMeals</NavLink></li>
               <li><NavLink href = '/community'>foodiesCommunity</NavLink></li>
               
            </ul>
        </nav>
        </header>
    );
}