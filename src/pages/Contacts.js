import React from "react";
import './style.css'


const Contacts = () => {
    return(
        <main className="section">
            <div className="container">
                <h1 className="title-1">   Contacts</h1>

                <ul className="content-list">
                <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Sochi, Russia</p>
                    </li>

                    <li className="content-list__item">
                        <h2 className="title-2">Telegram/WhatsApp</h2>
                        <p>
                            <a href="tel:+79186128926">+7 (918) 612 89-26</a>
                        </p>
                    </li>

                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:cofixram@mail.ru">cofixram@mail.ru</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Contacts;