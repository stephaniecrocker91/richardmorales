import React from 'react';
import app from '../App.module.css';
import styles from '../styles/Servicios.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import hero from '../images/richard.png';
import china from '../images/china.jpg';
import meditacion from '../images/meditacion.jpg';
import yoga from '../images/yoga.jpg';


function Servicios() {
    const serviciosData = [
        {
            title: "Tai Chi Chuan",
            image: hero,
            info: "El taichí, tai chi o tai chi chuan es un arte marcial..."
        },
        {
            title: "Chi Kung",
            image: hero,
            info: "El Chi Kung o Qi Gong es una terapia medicinal de origen chino..."
        },
        {
            title: "Yoga",
            image: yoga,
            info: "El yoga es una antigua práctica física, mental y espiritual..."
        },
        {
            title: "Meditación",
            image: meditacion,
            info: "La meditación es una práctica mental que implica concentrar la mente..."
        },
        {
            title: "Medicina Tradicional China",
            image: china,
            info: "La Medicina Tradicional China (MTC) es un sistema de medicina..."
        },
        {
            title: "Reiki",
            image: hero,
            info: "El Reiki es una forma de terapia de sanación energética que se originó..."
        },
        {
            title: "Terapias Florales",
            image: hero,
            info: "Las terapias florales son un tipo de terapia complementaria que se basa..."
        },
    ];

    return (
        <>
            <div className={app.Box}>
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <h3>Servicios</h3>
                    {/* Resto del contenido */}
                    {serviciosData.map((servicio, index) => (
                        <Row className={`${styles.Margin} ${index % 2 === 1 ? styles.ReverseOrder : ''}`} key={index}>
                            <Col lg={4} md={4} sm={12} xs={12} className={index % 2 === 1 ? styles.MobileImage : ''}>
                                <img
                                    src={servicio.image}
                                    alt={`Imagen ${servicio.title}`}
                                    className={styles.BioImage}
                                />
                            </Col>
                            <Col>
                                <div className={styles.Box}>
                                    <div className={styles.BioText}>
                                        <h4>{servicio.title}</h4>
                                        <p>{servicio.info}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default Servicios;
