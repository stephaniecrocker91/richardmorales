import { React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Servicios.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import hero from '../images/richard.png'


function Intro() {
    return (
        <>
        <div className={app.Box}>
            <Container fluid 
                style={
                    {
                        paddingLeft: 0,
                        paddingRight: 0,
                        
                    }
            }>
                <h3>
                Servicios
                </h3>
                {/*<div className={styles.ServiceLinks}>
                <a class="service-link" href="#service1">Service 1</a>
                <a class="service-link" href="#service2">Service 2</a>
                <a class="service-link" href="#service3">Service 3</a>
                <a class="service-link" href="#service4">Service 4</a>
                <a class="service-link" href="#service5">Service 5</a>
                <a class="service-link" href="#service6">Service 6</a>
        </div>*/}
                <Row className={styles.Margin}>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                                <h4>Tai Chi Chuan</h4>
                                <p>El taichí, tai chi o tai chi chuan es un arte marcial que practican millones de personas en todo el mundo debido a los múltiples beneficios que ofrece, tanto a nivel corporal como mental, por la parte de meditación que incluye. Estos beneficios se hacen evidentes en poco tiempo, pues aunque se trata de un ejercicio que se realiza lentamente y de forma suave, con él se pueden trabajar todos los músculos del cuerpo, y además se tienen en cuenta otros factores como la fuerza, la flexibilidad y el equilibrio. De este modo, el taichí es efectivo en la mejora de la condición física, en el tratamiento de enfermedades circulatorias e incluso a la hora de retrasar el envejecimiento.</p>
                                <p>La particularidad de esta disciplina consiste en combinar de forma armónica los tres fundamentos en los que se sustenta, y que son el movimiento corporal, la concentración mental y la realización de una respiración consciente.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.Margin}>   
                    
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Chi Kung</h4>
                            <p>El Chi Kung o Qi Gong es una terapia medicinal de origen chino que pertenece al mismo grupo que otras terapias como el taichi o el reiki. Todas ellas proceden de la tradición oriental y sustentan sus principios en la importancia de canalizar de forma adecuada la energía vital (Qi) a través de los diferentes meridianos que recorren nuestro cuerpo. Según dichos principios, el buen estado de la salud de cada uno dependerá de nuestra capacidad para conseguir el correcto equilibrio entre la mente y el cuerpo; y dicho bienestar se logra, principalmente, a través de la meditación y del control de la respiración.</p>
                            <p>De hecho, la traducción literal de chi kung vendría a ser ‘el trabajo de la respiración’, ya que este método terapéutico incide especialmente en la importancia de que nuestra respiración sea consciente y acompañe a cada uno de nuestros movimientos y pensamientos.</p>
                            <p>También conocida como “fuente de la juventud”, quienes la practican aseguran que les ayuda a eliminar las tensiones y el estrés del día a día y que es un auténtico caudal de paz que les aporta salud y vitalidad.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                </Row>
                <Row className={styles.Margin}>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Yoga</h4>
                            <p>El yoga es una antigua práctica física, mental y espiritual originaria de la India. Se ha convertido en una disciplina globalmente popular que se enfoca en el equilibrio y la armonía entre el cuerpo, la mente y el espíritu. El yoga ofrece una variedad de técnicas y ejercicios que pueden ayudar a mejorar la flexibilidad, la fuerza, la relajación y la conciencia mental.</p>
                            <p>El yoga se practica en todo el mundo y es apreciado por sus numerosos beneficios para la salud y el bienestar. Estos beneficios incluyen una mejor flexibilidad, fuerza y resistencia, una reducción del estrés, una mejora en la postura y la alineación del cuerpo, y un aumento en la conciencia mental y emocional.</p>
                            <p>Es importante destacar que el yoga es una práctica inclusiva que puede adaptarse a personas de todas las edades y niveles de condición física. Puede ser practicado como una forma de ejercicio, una técnica de relajación o como una vía espiritual, dependiendo de las preferencias y objetivos individuales de cada persona.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.Margin}>   
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Meditación</h4>
                            <p>La meditación es una práctica mental que implica concentrar la mente de manera consciente en un objeto, pensamiento, sonido, imagen o experiencia, con el propósito de alcanzar un estado de claridad mental, relajación y conciencia plena. A lo largo de la historia, la meditación ha sido una parte integral de muchas tradiciones espirituales y culturas de todo el mundo, y en tiempos más recientes, ha ganado popularidad como una herramienta para mejorar el bienestar mental y emocional.</p>
                            <p>Los beneficios de la meditación incluyen la reducción del estrés, la mejora de la salud mental, la promoción de la concentración y la atención, el fomento de la claridad mental, el aumento del bienestar emocional y la promoción de una sensación general de paz y calma. La meditación puede ser practicada de muchas maneras y se adapta a las necesidades y preferencias individuales. Puede ser una práctica espiritual, un ejercicio de atención plena o una técnica para promover el bienestar, dependiendo de los objetivos y creencias personales.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                </Row>
                <Row className={styles.Margin}>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Medicina Tradicional China</h4>
                            <p>La Medicina Tradicional China (MTC) es un sistema de medicina que se ha desarrollado y practicado en China durante miles de años. Es un sistema integral que aborda la salud y el bienestar de una persona desde una perspectiva holística, considerando la interconexión entre el cuerpo, la mente y el espíritu. La MTC se basa en principios y conceptos únicos que son muy diferentes de la medicina occidental, y utiliza una variedad de enfoques terapéuticos para mantener y restaurar la salud.</p>
                            <p>Algunos aspectos clave de la Medicina Tradicional China incluyen: Qi (El concepto de Qi se refiere a la energía vital o fuerza vital que fluye a través del cuerpo), Yin y Yang (La MTC se basa en el equilibrio entre dos fuerzas opuestas pero complementarias llamadas: Yin y Yang.), Los Cinco Elementos (madera, fuego, tierra, metal y agua), diagnóstico, acupuntura, Fitoterapia (La MTC utiliza hierbas medicinales chinas para tratar diversas condiciones de salud), Terapias manuales (Masaje Tui Na y otras terapias manuales) y la dieta.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.Margin}>   
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Reiki</h4>
                            <p>El Reiki es una forma de terapia de sanación energética que se originó en Japón a principios del siglo XX. La palabra "Reiki" se compone de dos partes: "rei", que significa "energía universal" o "divina", y "ki", que se refiere a la energía vital que fluye a través de todos los seres vivos. En conjunto, "Reiki" se traduce comúnmente como "energía vital universal" o "energía divina universal".</p>
                            <p>La práctica del Reiki se basa en la creencia de que un practicante de Reiki puede canalizar esta energía universal a través de sus manos y dirigirla hacia un individuo o a sí mismo para promover la sanación física, emocional, mental y espiritual. Los practicantes de Reiki sostienen que esta energía fluye a través de canales o chakras en el cuerpo y que el bloqueo o desequilibrio en el flujo de esta energía puede conducir a enfermedades y malestar.</p>
                            <p>La sesión típica de Reiki implica que el receptor se acueste o se siente con ropa cómoda mientras el practicante coloca sus manos en o cerca del cuerpo del receptor en posiciones específicas. El practicante luego canaliza la energía Reiki a través de sus manos hacia el receptor. Se dice que esta energía fluye de manera intuitiva hacia las áreas que más lo necesitan, ayudando a relajar el cuerpo, aliviar el estrés y promover la curación. Los practicantes de Reiki afirman que la terapia puede ayudar a aliviar el dolor, reducir la ansiedad y mejorar la sensación general de bienestar.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                </Row>
                <Row className={styles.Margin}>
                    <Col lg={4} md={4} sm={12} xs={12}><img src={hero}
                            alt='Imagen Ricard Morales'
                            className={
                                styles.BioImage
                            }/></Col>
                    <Col>
                        <div className={
                            styles.Box
                        }>
                            <div className={styles.BioText}>
                            <h4>Terapias Florales</h4>
                            <p>Las terapias florales son un tipo de terapia complementaria que se basa en el uso de extractos de flores y plantas para promover la salud emocional y el bienestar psicológico. Estas terapias se centran en la idea de que las esencias florales contienen propiedades curativas que pueden influir positivamente en las emociones, el estado de ánimo y el equilibrio mental de una persona.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}

export default Intro;

