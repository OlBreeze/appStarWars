import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';
import friend0 from "../images/main.jpg";
import mindtrick from "../images/Mindtrick.png";
export const baseURL = 'https://sw-info-api.herokuapp.com/';

export const haverim = {
    luke: {
        key: "luke",
        img: friend0,
        url: `${baseURL}/v1/peoples/1`,
        name: "Luke Skywalker"
    },
    r2d2:
        {
            key: "r2d2",
            name: "R2-D2",
            img: friend1,
            url: `${baseURL}/v1/peoples/3`
        },
    c3po:
        {
            key: "c3po",
            name: "C-3PO",
            img: friend2,
            url: `${baseURL}/v1/peoples/2`
        },
    ewok:
        {
            key: "ewok",
            name: "Wicket Systri Warrick",
            img: friend3,
            url: `${baseURL}/v1/peoples/30`
        },
    chewbacca:
        {
            key: "chewbacca",
            name: "Chewbacca",
            img: friend4,
            url: `${baseURL}/v1/peoples/13`
        },
    han_solo:
        {
            key: "han_solo",
            name: "Han Solo",
            img: friend5,
            url: `${baseURL}/v1/peoples/14`
        },
    leia:
        {
            key: "leia",
            name: "Leia Organa",
            img: friend6,
            url: `${baseURL}/v1/peoples/5`
        },
    falcon:
        {
            key: "falcon",
            name: "Millenium Falcon",
            img: friend7,
            url: `${baseURL}/v1/transports/10`
        },
    obi_wan:
        {
            key: "obi_wan",
            name: "Obi-Wan Kenobi",
            img: friend8,
            url: `${baseURL}/v1/peoples/10`
        },
    yoda:
        {
            key: "yoda",
            name: "Yoda",
            img: friend9,
            url: `${baseURL}/v1/peoples/0`
        }}
export const characters = Object.keys(haverim);
// export const navItems = ['home', 'about me', 'star wars', 'contact'];
export const navItems = [
    {title:'Home', route: 'home'},
    {title: 'About me', route: 'about'},
    {title: 'Star wars', route: 'stars'},
    {title:'Contact', route: 'contact'}];
// episode

export const starWarsText = ` __________ S  T  A  R   ____    W  A  R  S _________

                        Scientists from the University of Oakland and the University of Central Florida conducted 
                        an analysis of all the Star Wars series.
                        
                        Scientists claim that almost every character suffers from some kind of mental disorder. 
                        The authors diagnosed Darth Vader with borderline personality disorder.
                        
                        C-3PO is a victim of obsessive-compulsive personality disorder, a condition in which the 
                        patient is obsessed with intrusive thoughts. Chewbacca has been diagnosed with impulsive 
                        personality disorder.

                        Jabba the Hutt lacks empathy and remorse, and his callousness and indifference make him a psychopath.

                        Lando Calrissian is a gambler, obsessed with a pathological passion for gambling, ludomania. 
                        The arrogant Wilhuff Tarkin, who dreams of unlimited power and wealth, suffers from narcissism.

                        Diagnosing Yoda is not easy; his unusual manner of speaking could be either a symptom of a 
                        mental disorder or simply part of his image.

                        Queen Amidala is a prime example of perinatal mental disorder. Princess Leia may be diagnosed 
                        with hysterical psychopathy.

                        Scientists believe that Star Wars could well be used as a visual aid in psychiatry for students.
                         

                       _____  P r I s i T i O n __ P r o V i s I o N )))`;

// export const starWarsText = `___ S  T  A  R   ____    W  A  R  S ___
//                         Ученые из Университета Окленда и из Университета Центральной Флориды провели анализ всех серий «Звездных войн».
//
//                         Ученые утверждают, что практически каждый из героев страдает каким-либо психическим
//                         расстройством. У Дарта Вейдера авторы диагностировали пограничное расстройство личности.
//
//                         C-3PO – жертва обсессивно-компульсивного расстройства личности, состояния, при котором
//                         пациент одержим навязчивыми мыслями. У Чубакки выявлено импульсивное расстройство личности.
//
//                         Джабба Хатт лишен эмпатии и угрызений совести, а его бессердечность и равнодушие дают
//                         основания считать его психопатом.
//
//                         Лэндо Калриссиан – игрок, одержимый патологической страстью к азартным играм, лудоманией.
//                         Высокомерный Уилхафф Таркин, грезящий о неограниченной мощи и богатстве, страдает нарциссизмом.
//
//                         Поставить диагноз Йоде непросто его необычная манера говорить может быть как симптомом психического расстройства,
//                         так и просто частью его образа.
//
//                         Королева Амидала – показательный пример перинатального психического расстройства.
//                         Принцессе Леи может быть диагностирована истерическая психопатия.
//
//                         Ученые считают, что «Звездные войны» вполне можно использовать в качестве наглядного пособия
//                         по психиатрии для студентов. _______
//
//                         П ри Я Т но г о  __ пр о См О т Ра )) )`;