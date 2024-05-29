import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../scrollButton/ScrollToTopButton';

function HomePage() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='homePage'>
            <header>
                <h1>Вітаємо на сайті компанії BAS - Bussines Automation Software</h1>
            </header>

            <section className="intro">
                <h2>Автоматизація бізнесу на новому рівні</h2>
                <p>Ми пропонуємо інноваційні рішення для автоматизації вашого бізнесу, щоб забезпечити оптимізацію робочих процесів і підвищення продуктивності.</p>
                <p>Використовуйте наші технології для забезпечення конкурентної переваги та зростання вашого бізнесу в епоху цифрових технологій.</p>
            </section>


            <section className="services">
                <h2>Наші послуги</h2>
                <ul>
                    <li>Розробка програмного забезпечення для автоматизації бізнес-процесів</li>
                    <li>Інтеграція систем для оптимізації виробничих процесів</li>
                    <li>Консультації з впровадження інноваційних технологій у бізнес</li>
                    <li>Розробка мобільних додатків та веб-порталів для підтримки клієнтів</li>
                    <li>Автоматизація облікових та фінансових процесів</li>
                </ul>
            </section>


            <section className="about">
                <h2>Хто ми?</h2>
                <p>Компанія BAS спеціалізується на розробці програмного забезпечення для автоматизації бізнес-процесів. Наша місія - допомогти компаніям підвищити ефективність роботи за допомогою інноваційних технологій.</p>
                <p>Ми об'єднуємо в собі команду досвідчених розробників, аналітиків та консультантів з різноманітним досвідом у розробці рішень для автоматизації бізнесу. Наші розробки орієнтовані на вирішення конкретних проблем клієнтів та підвищення їх ефективності.</p>
            </section>


            <section className="contact">
                <h2>Зв'яжіться з нами</h2>
                <p>Ми завжди відкриті до співпраці. Зв'яжіться з нами, щоб дізнатися більше про наші послуги або отримати консультацію.</p>
                <Link to="/contacts"><button onClick={scrollToTop}>Зв'язатися з нами</button></Link>
            </section>

            <ScrollToTopButton />
        </div>
    );
}

export default HomePage;