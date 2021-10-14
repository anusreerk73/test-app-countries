import React from 'react';
import style from './footer.module.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Footer = () => {

    return (
        <div className={style.footerWrap}>
            <div className="spacer80"></div>

            
            
            
            
            <div className={style.footer}>
                <Row>
                    <Col lg={4} md={4} xs={4} sm={4}></Col>
                    <Col lg={4} md={4} xs={4} sm={4}>
                    <Row>
                        <Col lg={3} md={3} xs={3} sm={3}>
                            <div className="center">
                           <span  className="icon"> <i class="bi bi-google "></i></span>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3} sm={3}>
                            <div className="center">
                           <span className="icon">
                           <i class="bi bi-facebook "></i>
                           </span>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3} sm={3}>
                            <div className="center">
                                <span className="icon">
                                <i  class="bi bi-instagram  "></i>

                                </span>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3} sm={3}>
                            <div className="center">
                            <span className="icon">
                            <i class="bi bi-twitter "></i>
                            </span>
                            </div>
                        </Col>
                    </Row></Col>
                    <Col lg={4} md={4} xs={4} sm={4}></Col>
                </Row>   
            </div>

            <Row lg={1} xs={1} className={style.footer}>
            <div className="spacer40"></div>
               <div>
                   Example@gmail.com
               </div>
               <div>Copyright@2020 Name. All rights reserved.</div>
            </Row>
            <div className="spacer60"></div>
        </div>
    )   
}

export default Footer;