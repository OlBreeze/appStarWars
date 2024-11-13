import React, {useContext} from 'react';
import {StarWarsContext} from "../utils/StarWarsContext";

const Hero = () => {
    const {mainHero} = useContext(StarWarsContext);
    return (
        <section className="float-start w-25 my-1 me-3">
            <img className="w-100" src={mainHero.img} alt="hero"/>
        </section>
    );
};

export default Hero;