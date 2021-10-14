import React from 'react';
import style from './list.module.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const CountryList = () => {

    return (
        <div className={style.homeWrap}>
          <div className="container ">
            <div className="spacer80"></div>
              <Row >
                  <Col lg={6} md={6} sm={12} xs={12}>
                   hhhhhhhhhhhhhhhhhh
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  </Col>
                  <Col lg={3}></Col>

              </Row>
          </div>
        </div>
    )   
}

export default CountryList;