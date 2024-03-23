import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import './write.css'
import Header from "../component/Header";
import axios from 'axios';
import cookie from 'react-cookies';

const date = new Date();
const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDay();
const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
export default function Write() {
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');

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
        
        axios.post('http://localhost:8888/posts/write',  {accessToken: cookie.load('accessToken'), topic: topic, content: content, author: 'qdrptd', date: dateString})
        .then((res)=>{alert("글이 성공적으로 업로드되었습니다.")})
        .catch((e)=>{throw new Error(e)})
        
    };

    return (
        <div>
            <Header></Header>

            <div className = 'topicbutton'>
                오늘의 주제 :  
                <Button onClick={() => handleTopicChange('버튼1')}>버튼1</Button>
                <Button onClick={() => handleTopicChange('버튼2')}>버튼2</Button>
                <Button onClick={() => handleTopicChange('버튼3')}>버튼3</Button>

            </div>

            <div className='rectangle center'>

                {topic && <div style={{ fontSize: '30px', alignItems: 'center' }} className='Topic'>{topic}</div>}

                <div className='inputbox'>
                    <textarea 
                        value={content} 
                        onChange={handleInputChange}
                        style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', width: '600px', zIndex: 2, border: 'none', backgroundColor: '#D9D9D9'}} />
                </div>

            </div>

            <div className='submitbutton'>
                <Button onClick={handleSubmit}>전송</Button> 
            </div>

        </div>

    );
};
