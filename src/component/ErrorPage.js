import React, {useEffect} from 'react';
import mindtrick from '../images/Mindtrick.png';
import style from './error404.module.css';
import styleN from './error404neon.module.css';

const ErrorPage = () => {
    useEffect(() => {
        const app = {
            text: "May the Force be with you!",
            index: 0,
            chars: 0,
            speed: 150,
            container: ".text .content",

            init: function() {
                this.chars = this.text.length;
                this.write();
            },

            write: function() {
                const containerElement = document.querySelector(this.container);
                if (containerElement) {
                    containerElement.append(this.text[this.index]);
                    if (this.index < this.chars-1) {
                        this.index++;
                        window.setTimeout(() => {
                            this.write();
                        }, this.speed);
                    }
                }
            }
        };

        app.init();
    }, []);


    return (
        <div className={"pageError d-flex"}>
            <div className={"col text-center"}>

                <div id={styleN.containerNeon}>
                    <p><a href="/">Hello stranger!</a></p>
                    <p>These aren't the droids you're looking for.</p>
                    <p><a href="/"> ~ 404 ~ </a></p>
                </div>

                <div className={`text ${style.text}`}>
                    <div className={`content ${style.content}`}>
                        {/*Hello stranger.May the Force be with you!  «Да пребудет с тобой сила!»*/}
                    </div>
                    <div className={`dash ${style.dash}`}></div>
                </div>
            </div>


            {/*Глубокомысленная фраза написана должна быть тут*/}
            {/*It is unavoidable. It is your destiny (Palpatine) Это неизбежно. Это твоя судьба.*/}
            {/*I’ve got a bad feeling about this*/}
            {/*Do. Or do not. There is no try (Yoda)*/}
            {/*In my experience, there is no such thing as luck (Obi-Wan Kenobi)*/}

            <img src={mindtrick} className={`${style.pageErrorImg} img-fluid`} alt="mindtrick"/></div>
    );
};

export default ErrorPage;