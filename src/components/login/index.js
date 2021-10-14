

import React, { useEffect,useState ,useCallback} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './login.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

const SignupSchema = Yup.object().shape({
    password: Yup.string()
  .min(3, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  username: Yup.string()
  .required('Required'),
});


const Login = () => {
    let history = useHistory();

  const onSubmit = values => {
    toast.success("Login Successs")
    setTimeout(function(){ 
        history.push(`/countrylist`);
     }, 3000);
    }

    return (
    <div className={style.loginWrap}>
    <div className="container ">
        <Row >
           <Col lg={2} md={2} sm={2} xs={2}></Col>
           <Col lg={8} md={8} sm={8} xs={8}>

               <div className={style.title}>Sign In</div>
               <div className="spacer10"></div>
               <div className={style.subtitle}>New user?  <a href="/">Create an account</a></div>
               <div className="spacer25"></div>
               
            <Formik
                initialValues={{
                
                    username: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
                <Form >
                    <Row>
                    <Col lg={12}>
                    <Field name="username" type="text" className="inputs" placeholder="Username or email" />
                    {errors.username && touched.username ? <div className="errMsg">{errors.username}</div> : null}
                    </Col>
                    <div className="spacer20"></div>
                    <Col lg={12}>
                    <Field name="password" type="password" className="inputs" placeholder="Password"  />
                    {errors.password && touched.password ? <div className="errMsg">{errors.password}</div> : null}
                    </Col>
                    <div className="spacer25"></div>
                    <Col lg={12}>
                    <Row>
                        <Col lg={2} md={2} xs={2}>
                        <Field name="" type="checkbox" className="check"  />
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                            <div className="textDecor">Keep me signed in</div>
                        </Col>
                    </Row>
                    </Col>
                    <div className="spacer25"></div>
                    <Col lg={12}>
                    <button type="submit" className="btn1" >Sign In</button>
                    <div className="spacer25"></div>
                    <div  className="center">
                    <p class="subtitle line"><span>Or Sign In With</span></p>
                    </div>
                    <div className="spacer25"></div>

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
                    </Row>

                    <ToastContainer />
                    </Col>
                    </Row>
                    </Form>
                    )}
            </Formik>
           </Col>
           <Col lg={2} md={2} sm={2} xs={2}></Col>
        </Row>
    </div>
  </div>
    );
}

export default Login