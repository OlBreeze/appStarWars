import React, {useEffect, useRef, useState} from 'react';
import style from './contact.module.css';
import {baseURL} from "../utils/constants";
import emailjs from 'emailjs-com';

const Contact = () => {
   const [planets, setPlanets] = useState(null);
    // --- send email
    const form = useRef();
    // const inputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value

        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i8z4j6i', 'template_g12gmpa', form.current, 'gPCtbJp0vaWgcptHm')
            .then((result) => {
                console.log(result.text);
                // Очистка формы
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    status: "Your message has been sent successfully. 📬"
                });

            }, (error) => {
                console.log(error.text);
                setFormData({
                    ...formData,
                    status: "An error occurred (("
                });
            });
    };

    //------- send email --->

    useEffect(()=>{
        const planetsData = localStorage.getItem('planet_data');
        if (planetsData) {
            setPlanets(planetsData.split(','));
        }
        else {
            fetch(`${baseURL}v1/planets`)
                .then(response => response.json())
                .then(data => {
                    const livePlanets = []

                    for (const {name, population} of data) {
                        if (+population > 0)
                            livePlanets.push(name)
                    }

                    localStorage.setItem('planet_data', livePlanets.join(','));
                    setPlanets(livePlanets);
                })
                .catch(() => {
                    setPlanets(null);
                })
        }
    },[])

    let innerOption = [];
    if (planets === null) {
        innerOption = [
            <option key={1} value="saleucami">Saleucami</option>,
            <option key={2} value="sullust">Sullust</option>
        ];
    } else {
        planets.forEach((item, index) => {
            innerOption.push(<option key={index} value={item}>{item}</option>);
        });
    }

    return (
        <div className={style.container}>
            <form ref={form} onSubmit={sendEmail}>

                <label htmlFor="name" className={style.label}>Your name</label>
                <input type="text" id="name" name="name"
                       value={formData.name}
                       className={style.inpText} onChange={handleChange}
                       placeholder="Your name.." required/>

                <label htmlFor="email" className={style.label}>Email</label>
                <input type="email" id="email" name="email" className={style.inpText}
                       onChange={handleChange} value={formData.email} placeholder="Your email.." required/>

                <label htmlFor="planet" className={style.label}>Your planet</label>
                <select id="planet" name="planet" value={formData.planet} onChange={handleChange} className={style.elSelect}>
                    {innerOption}
                </select>

                <label htmlFor="message" className={style.label}>message</label>
                <textarea id="message" className={style.elTextarea} name="message"
                          value={formData.message} onChange={handleChange} placeholder="Write something.." required></textarea>

                <div className={"footerContact"}>
                    <input type="submit" value="Submit" className={style.button}/>
                    {formData.status && (
                        <h3 className = {`${formData.status.includes('success') ? "successContact" : "failureContact"}`}>
                            {formData.status}
                        </h3>
                    )}
                </div>

            </form>
        </div>
    );
};

export default Contact;


/*
let planet_data = {
    /!*id: data.id,
    edited: data.edited,
    climate: data.climate,
    surface_water: data.surface_water,
    name: data.name,
    diameter: data.diameter,
    rotation_period: data.rotation_period,
    created: data.created,
    terrain: data.terrain,
    gravity: data.gravity,
    orbital_period: data.orbital_period,
    population: data.population*!/
}*/
