import React, {useContext, useEffect, useState} from 'react';
import {StarWarsContext} from "../utils/StarWarsContext";
import {useNavigate, useParams} from "react-router-dom";
import {characters, haverim} from "../utils/constants";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [heroData, setHeroData]   = useState(null);
    const {mainHero,setMainHero}    = useContext(StarWarsContext);


    // --------------------------  our actions  -------------------
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



    useEffect(() => {
        const heroData = localStorage.getItem('hero_data');

        if (heroData && (mainHero.name ===  JSON.parse(heroData).hero.name)
            //&&((Date.now() - JSON.parse(heroData).timestamp)<5*60*1000)  //5 min
        )
        {
            setIsLoading(false);
            setHeroData(JSON.parse(heroData).hero);
        }

        else {
            // let her_number = Math.floor(Math.random() * 80 + 1);
            // fetch(`${baseURL}v1/peoples/${her_number}`)
            fetch(`${mainHero.url}`)
                .then(response => response.json())
                .then(data => {
                    let hero_data = {
                        name: data.name,
                        gender: data.gender,
                        skin_color: data.skin_color,
                        hair_color: data.hair_color,
                        height: data.height,
                        eye_color: data.eye_color,
                        mass: data.mass,
                        birth_year: data.birth_year
                    }

                    localStorage.setItem('hero_data', JSON.stringify({
                        hero: hero_data,
                        timestamp: Date.now()
                    }));

                    setIsLoading(false);
                    setHeroData(hero_data);

                }).catch(() => {
                setIsLoading(false);
                setHeroData(null);

            })
        }
    }, [mainHero]);

    return (
        (!isLoading && heroData !== null) ?
            <div className={"aboutPage"}>
                <div className={"rowAbout"}>
                    <span className={'left'}>Name:</span><span className={'right'}>{heroData.name}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Gender:</span> <span className={'right'}>{heroData.gender}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Skin_color:</span><span className={'right'}>{heroData.skin_color}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Hair_color: </span><span className={'right'}>{heroData.hair_color}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Height: </span><span className={'right'}>{heroData.height}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Eye_color:</span><span className={'right'}>{heroData.eye_color}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}>Mass: </span><span className={'right'}>{heroData.mass}</span></div>
                <div className={"rowAbout"}>
                    <span className={'left'}> Birth_year:</span><span className={'right'}>{heroData.birth_year}</span></div>
            </div>:  <h3>LOADING....</h3>
    );
};

export default About;