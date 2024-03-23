import React, { useState } from 'react';
import {Button, Segment} from 'semantic-ui-react';
import './history.css'
import Header from "../component/Header";
import axios from 'axios';
import cookie from 'react-cookies';
import { useEffect } from 'react';

export default function History() {
    const accesstoken = cookie.load('accesstoken')
    const [post, setPost] = useState();
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.post('http://34.229.241.108:8888/posts/best', {},  {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res); return(res);})
              const data = response.data.data;
              setPost(data);
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    }, [])
    
    return (
        <div>
            <Header></Header>

            <div className='title'> 
                History
            </div>
            {
                !post?null:
                post.map((p) =>{ 
                    return(
                        <div>
                            <Segment style={{'margin-top': '50px', width: '500px', 'margin-left': '500px' }}>
                                {p.topic} <br/>
                                {p.content} <br/>
                                {p.date} <br/>
                                좋아요: {p.like}개, 고마워요: {p.thank}개

                            </Segment>
                        </div>
                    )
                })
            }
            {/* <div className='container'>
                
            <div className='time'>
                <span className='leftarrow' onClick={timeDecrease} style={{ color: "#A0A0A0" }}>
                    {'<'}
                </span>


                    {year}년 {month}월 {day}일



                <span className='rightarrow' onClick={timeIncrease} style={{ color: "#A0A0A0" }}>
                    {'>'}
                </span>
                </div>
            </div> */}

        


        </div>
    );
};