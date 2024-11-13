import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {StarWarsContext} from "../utils/StarWarsContext";

const Friend = ({image, id}) => {
    const navigate = useNavigate();
    const {handleImageClick} = useContext(StarWarsContext);

    const classStyle = (id === 6) ? "left" : (id === 8) ? "right" : "candy";

    return <img src={image.img} alt={image.name} id={id}
                className={`imgFriend col-4 p-1 ${classStyle}`}
                onClick={() => {
                    handleImageClick(image);
                    navigate(`/heroes/${image.key}`)
                    }}
                style={{width: '33%', height: '31%', objectFit: 'cover'}}
    />
};

export default Friend;
