import React from 'react';
import './ContactsPage.css';
import ScrollToTopButton from '../scrollButton/ScrollToTopButton';

const ContactsPage = () => {
    return (
        <div className='contactsPage'>
            <header>
                <h1>Контакти</h1>
            </header>
            <section className="contact-info">
                <h2>Зв'яжіться з нами</h2>
                <p>Адреса: вул. Прикладна, 123, м. Київ, Україна</p>
                <p>Телефон: <a href="tel:+380123456789">+380123456789</a></p>
                <p>Email: <a href="mailto:info@bas.com">info@bas.com</a></p>
                <p>Соціальні мережі:
                    <a href="https://telegram.me/bas" target="_blank" rel="noopener noreferrer">Telegram</a>,
                    <a href="https://www.facebook.com/bas" target="_blank" rel="noopener noreferrer">Facebook</a>,
                    <a href="https://www.instagram.com/bas" target="_blank" rel="noopener noreferrer">Instagram</a>
                </p>
            </section>
            <div className="google-map">
                <iframe
                    title="Google Map"
                    width="100%"
                    height="400"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191294.83373353813!2d32.18088273035324!3d48.51319762177299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f02f7a6466c1fd%3A0x1161f52e85b50dd8!2z0LLRg9C70LjRhtGPINCh0LXRgNC_0L7Qv9C-0LvRjNGB0LrQuNC5INCn0L7RgNC_0YDRg9C90LAg0LrQsNC70LjRhtGPINCh0LXRgNC_0L7Qv9C-0LvRjNGB0LrQuNC5INCa0LjRl9Cy0YHQutCw0Y8g0YHQtdGA0LXQu9C10LrRgtC1LCDQn9C-0LvRjNC90LAsIDUwMDAwMA!5e0!3m2!1sru!2sua!4v1617595391508!5m2!1sru!2sua&zoom=10"
                ></iframe>
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default ContactsPage;
