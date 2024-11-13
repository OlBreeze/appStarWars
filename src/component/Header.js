import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {StarWarsContext} from "../utils/StarWarsContext";
import {useLocation} from "react-router-dom";

const Header = () => {
    const {mainHero} = useContext(StarWarsContext);
    const location = useLocation();
    // console.log(location.pathname);

    let nameHero;
    if (location.pathname.includes('about')|| location.pathname.includes('heroes'))
        nameHero = mainHero.name;
    else if  (location.pathname.includes('star_wars'))
        nameHero = "Star Wars";
    else
        nameHero = '';

    // console.log(activePage + "    " + nameHero)
    return (
        <header className="rounded-top-4">
            <Navigation/>
            <h1 className={`text-center py-4`}>{nameHero}</h1>
        </header>
    );
}


export default Header;