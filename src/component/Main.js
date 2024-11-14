import React from 'react';
import Heroes from "./Heroes";
import About from "./About";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {navItems} from "../utils/constants";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {
    return (
                        // это див может и не нужен совсем
            <div className={"main_page d-flex flex-column"} >
                <Routes>

                    <Route path={'/'} element={<StarWars/>}/>
                    <Route path={`${navItems[0].route}`} element={<StarWars/>}/>

                    <Route path={`${navItems[1].route}`} element={<Heroes/>}>
                        <Route path={':heroId'} element={<Heroes/>}/>
                    </Route>

                    <Route path={`${navItems[2].route}`} element={<About/>}>
                        <Route path={':heroId'} element={<About/>}/>
                    </Route>

                    <Route path={`${navItems[3].route}`} element={<Contact/>}>
                    </Route>
                    <Route path={'error'} element={<ErrorPage/>}/>  {/*во всех остальных случаях*/}
                    <Route path={'/appStarWars/error'} element={<ErrorPage/>}/>
                    <Route path={'heroes/error'} element={<ErrorPage/>}/>  {/*во всех остальных случаях*/}
                    <Route path={'about/error'} element={<ErrorPage/>}/>  {/*во всех остальных случаях*/}
                    <Route path={'*'} element={<ErrorPage/>}/>  {/*во всех остальных случаях*/}
                </Routes>
            </div>
    );
}


export default Main;