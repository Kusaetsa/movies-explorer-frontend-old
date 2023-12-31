import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__copyright'>&copy; 2023</p>
                <nav className='footer__links'>
                    <Link className='footer__link link_hovered' to="https://practicum.yandex.ru/">Яндекс.Практикум</Link>
                    <Link className='footer__link link_hovered' to="https://github.com/Kusaetsa">Github</Link>
                </nav>
            </div>
        </footer>
    )

}

export default Footer;