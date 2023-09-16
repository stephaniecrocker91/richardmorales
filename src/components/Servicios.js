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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Adipiscing vitae proin sagittis nisl. Volutpat consequat mauris nunc congue nisi vitae suscipit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Risus ultricies tristique nulla aliquet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Accumsan sit amet nulla facilisi morbi tempus. Tempor orci eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu consequat. Risus quis varius quam quisque id diam vel. Sit amet volutpat consequat mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Posuere sollicitudin aliquam ultrices sagittis orci. Donec adipiscing tristique risus nec. Quam adipiscing vitae proin sagittis nisl rhoncus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
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

