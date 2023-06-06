import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const setActiveLink = ({isActive}) => isActive ? classes.active : undefined
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink end className={setActiveLink} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink end className={setActiveLink} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation