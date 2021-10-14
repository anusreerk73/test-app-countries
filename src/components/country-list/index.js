

import React, { useEffect,useState ,useCallback} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './list.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card'
import Header from "../../components/header";
import Footer from "../footer";



const CountryList =  ({fetchList, listData}) => { 
    const [list,setList] = useState([])

    const { loginData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();
    let history = useHistory();

    const fetchcallback = useCallback(()=>{
        fetchList()
    },[fetchList])
  


    useEffect(()=>{
        fetchcallback()
    },[fetchcallback])

    useEffect(()=>{

        console.log("userData" , listData)

        setList(listData)
    },[listData])



 

    return (
        <div className={style.listWrap}>
           <div class="container">
            <Header/>
           <Row lg={2} md={2} sm={1} xs={1}>
                 {list.map((item)=>{
                    return (
                       
                      <div className={style.listContainer}>
                            <Card className={style.listcard}>
                            <Card.Body>
                            <Row>
                            <Col lg={4} md={4} className={style.img}>
                                <img  src={item.flag}/>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <div>{item.name}</div>
                                <div>{item.region}</div>

                            </Col>

                           
                            </Row>
                            </Card.Body>
                            </Card>
                            
                      </div>
                      
                       
                ) })}
            </Row>
            <Footer/>
           </div>
        </div>


      
       );
}


const mapStateToProps = (state) => {
    return { listData: state.listData }
    }
    export default connect(mapStateToProps,{fetchList})(CountryList);

