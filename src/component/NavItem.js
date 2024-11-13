import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {StarWarsContext} from "../utils/StarWarsContext";
import {navItems} from "../utils/constants";

const NavItem = ({text, route}) => {
    const  {mainHero} = useContext(StarWarsContext);

    // Для Home и About me добавляем hero к маршруту
    const pathRoute = (route === navItems[1].route || route === navItems[2].route) ? `${route}/${mainHero.key}` : route;
    // console.log(pathRoute)
    return (
        <Link to={pathRoute}>
            <li className="nav-item border border-light rounded-pill btn btn-danger mx-1 button">
                {text}
            </li>
        </Link>
    );

};


export default NavItem;