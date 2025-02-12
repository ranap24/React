import { NavLink } from "react-router-dom";


export default function MainNavigation()
{
    return (
        <header className="header">
            <nav>
                <ul className="list">
                    <li><NavLink to = ''  className={({isActive})=> isActive ? 'isActive' : ''} end>HomePage</NavLink></li>
                    <li><NavLink to = 'products'   className={({isActive})=> isActive ? 'isActive' : ""} >ProductsPage</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}