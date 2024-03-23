import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import './write.css'
import Header from "../component/Header";

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
        // 전송 후 필요한 작업을 수행하세요.
        // 예: 서버로 전송하고 성공 또는 실패 메시지를 표시하는 등
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
