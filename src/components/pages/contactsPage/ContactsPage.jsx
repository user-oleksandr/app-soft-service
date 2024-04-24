import React, { useEffect } from 'react';
import './ContactsPage.css';
import ScrollToTopButton from '../scrollButton/ScrollToTopButton';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Импортируем стандартную иконку маркера
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const ContactsPage = () => {
    useEffect(() => {
        // Создаем карту
        const map = L.map('map').setView([48.52010962177299, 32.28209273035324], 14); 
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://carto.com/">CartoDB</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // маркер
        const defaultMarkerIcon = L.icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [20, 31],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        });

        // Маркер на карте с использованием стандартной иконки
        L.marker([48.52010962177299, 32.28209273035324], { icon: defaultMarkerIcon }).addTo(map)
        .bindPopup("<b>Soft Age Service</b>" +
                   "<br>Добро пожаловать!<br>" +
                   "Телефон: +380123456789<br>" +
                   "Email: <a href='mailto:info@bas.com'>info@bas.com</a><br>" +
                   "Режим работы: Пн-Пт 9:00-18:00<br>" +  
                   "Адрес: вул. Прикладна, 123, м. Київ, Україна<br>")  
        .openPopup();
    }, []);

    return (
        <div className='contactsPage'>
            <header>
                <h1>Контакти</h1>
            </header>
            <section className="contact-info">
                <h2>Зв'яжіться з нами</h2>
                <p>Адреса: вул. Прикладна, 123, м. Кропивницький, Україна</p>
                <p>Телефон: <a href="tel:+380123456789">+380123456789</a></p>
                <p>Email: <a href="mailto:info@bas.com">info@bas.com</a></p>
                <p>Соціальні мережі:
                    <a href="https://telegram.me/bas" target="_blank" rel="noopener noreferrer">Telegram</a>,
                    <a href="https://www.facebook.com/bas" target="_blank" rel="noopener noreferrer">Facebook</a>,
                    <a href="https://www.instagram.com/bas" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
            </section>
            <div id="map" className="leaflet-map"></div>
            <ScrollToTopButton />
        </div>
    );
};

export default ContactsPage;
