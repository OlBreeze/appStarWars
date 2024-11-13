import './App.css';
import Header from "./component/Header";
import {useState} from "react";
import {haverim} from "./utils/constants";
import Main from "./component/Main";
import {StarWarsContext} from "./utils/StarWarsContext";

import React from 'react';

const App = () => {
    const [mainHero, setMainHero]     = useState(haverim.luke);
    const [gallery, setGallery]       = useState(Object.values(haverim).filter(img => img !== haverim.luke));

    const handleImageClick = (clickedImage) => {
        setGallery(prevGallery => {
            const updatedGallery = prevGallery.map(img => img === clickedImage ? mainHero : img);
            setMainHero(clickedImage); // Меняем главную картинку на кликнутую
            return updatedGallery;
        });
    };
    return (
        <div className="mainBox container-fluid">
            <StarWarsContext.Provider value={{
                mainHero, gallery, setMainHero,
                handleImageClick
            }}>
                <Header/>
                <Main/>
            </StarWarsContext.Provider>
        </div>
    )
        ;
};

export default App;




