

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
    // let formData = {
    //   username: values.username,
    //   password: values.password,
    // }

    // if( formData.username && loginData[0].password == formData.password ){
        // toast.success("Login Successs")
    //     localStorage.setItem('UserList', JSON.stringify(list.results))
    //     history.push(`/userlist`);

    // }else{
    //     toast.error("Invalid username or password");
    // }

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
               <div className={style.subtitle}>New user? Create an account</div>
               
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
                    <Col lg={12}>
                    <button type="submit" className="btn1" >Sign In</button>


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