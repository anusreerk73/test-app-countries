import React from 'react';
import style from './home.module.scss'
import Login from '../../components/login'
import Assets from '../../styles/Assets'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Home = () => {

    return (
        <div className={style.homeWrap}>
          <div className="container ">
            <div className="spacer80"></div>
              <Row >
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <Login/>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                        <img src={Assets.loginImg} />
                  </Col>
                  <Col lg={3}></Col>

              </Row>
          </div>
        </div>
    )   
}

export default Home;