import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {useNavigate, useParams} from "react-router-dom";
import {StarWarsContext} from "../utils/StarWarsContext";
import {characters, haverim} from "../utils/constants";

const Heroes = () => {
    // --------------------------  our actions  -------------------
    const {mainHero, setMainHero} = useContext(StarWarsContext);
    const navigate = useNavigate();
    let {heroId} = useParams(); // позволяет получить параметры из URL.

    useEffect(() => {
        if (heroId !== undefined&&!characters.includes(heroId)) {
        //     setMainHero(characters[0]);
            navigate('/error');
            return;
        }

        if (characters.includes(heroId)) {
            // console.log(haverim[heroId])
            if (heroId !== mainHero)
                setMainHero(haverim[heroId]);
            // navigate(`${route}/${heroId}`)
        }
    }, [heroId, mainHero, navigate , setMainHero]);
    //----------------------

    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </main>
    );
};

export default Heroes;