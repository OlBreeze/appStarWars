import React, {useContext} from 'react';
import Friend from "./Friend";
import {StarWarsContext} from "../utils/StarWarsContext";

const Friends = () => {
    const {gallery} = useContext(StarWarsContext);

    return (
        <div>
            {/*<section className="float-end w-50 border border-light rounded-bottom-4 mx-1 row">*/}
            <section style={{ width: '45%' }} className="float-end border border-light rounded-bottom-4 mx-1 row">
                <h3 className="text-center col-12">Dream Team</h3>
                {gallery.map((image, index) => (
                    <Friend key={index} image={image} id = {index}
                    />
                ))}
            </section>
        </div>
    );
};

export default Friends;


