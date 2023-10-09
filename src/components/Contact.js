import {React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Contact.module.css'
import video from '../images/stars.mp4'


function Contact() {
    return (
        <>
        <div className={styles.LightGreen}>
            <div className={
                app.Box}>
                <h3>
                    Contacto
                </h3>
                <p>Conéctate y síguenos en nuestras redes sociales</p>
            </div>
            <div class={styles.SocialContainer}>
            <span>
                <a className={
                        styles.Social
                    }
                    href="https://wa.me/+59895783566"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                </a>
                <p>Whatsaap</p>
            </span>
            <span>
                <a className={
                        styles.Social
                    }
                    href="mailto:morales.r51@gmail.com">
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <p>Mail</p>
            </span>
            <span>
                <a className={
                        styles.Social
                    }
                    href='https://www.instagram.com/richardmorales1612/'
                    target="_blank"
                    rel="noopener noreferrer">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <p>Instagram</p>
            </span>
            <span>
                <a className={
                        styles.Social
                    }
                    href="https://www.facebook.com/Termerg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <p>Facebook</p>
            </span>
 
            </div>
            </div>
        </>
    )

}

export default Contact;
