import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './write.css'
import Header from "../component/Header";
import axios from 'axios';
import cookie from 'react-cookies';
import { useNavigate } from 'react-router-dom';

const date = new Date();
const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


export default function Write() {
    const accesstoken = cookie.load('accesstoken');
    const nav = useNavigate();
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');
    if(!accesstoken){
        return(
            <div>
                <Header></Header>
                <Link to='/login'>로그인</Link> 후 이용하실 수 있습니다!
            </div>
        )
        
    }
    const handleInputChange = (event) => {
        setContent(event.target.value);
    };

    const handleTopicChange = (newTopic) => {
        setTopic(newTopic);
    };

    const handleSubmit = () => {
        // 여기에 전송하는 로직을 추가하세요.
        console.log('전송될 내용:', content);
        console.log('전송될 주제:', topic);
        if (topic !== '' || content !== ''){
            axios.post('http://localhost:8888/posts/write',  {topic: topic, content: content, author: 'qdrptd', date: dateString}, {headers: {'accesstoken': accesstoken}})
            .then((res)=>{alert("글이 성공적으로 업로드되었습니다.")})
            .catch((e)=>{throw new Error(e)})
        } else {
            alert('주제와 내용을 작성해주세요!')
        }
        
    };

    return (
        <div>
            <Header></Header>

            <div className = 'topicbuttonwrite'>
                오늘의 주제 :
                <span className='titletopicwrite'> 
                <Button onClick={() => handleTopicChange('버튼1')} >버튼1</Button>
                </span>
                <span className='titletopicwrite'>
                <Button onClick={() => handleTopicChange('버튼2')} >버튼2</Button>
                </span>
                <span className='titletopicwrite'>
                <Button onClick={() => handleTopicChange('버튼3')} >버튼3</Button>

                </span>


                

            </div>

            {topic && <div style={{ fontSize: '24px', alignItems: 'center', marginLeft: '48%', marginTop: '30px'}} className='Topicwrite'>{topic}</div>}

            <div className='rectanglewrite centerwrite'>
                <div className='inputboxwrite'>
                    <textarea 
                        value={content} 
                        onChange={handleInputChange}
                        style = {{fontSize: '24px', display: 'flex', zIndex: '2'}} />
                </div>

            </div>

            <div className='submitbuttonwrite'>
                <Button onClick={handleSubmit} className = 'submitbuttonwrite'>전송</Button> 
            </div>
            </div>

    )
};
