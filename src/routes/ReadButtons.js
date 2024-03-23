import thumbsup from './images/thumbsup.png'
import heart from './images/heart.png'
import thumbsupSelected from './images/thumbsupSelected.png'
import heartSelected from './images/heartSelected.png'
import axios from 'axios'
import './readbuttons.css'
import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';

export default function Buttons({content, date, author, topic}){
    const accesstoken = cookie.load('accesstoken')
    const [thumbsupMode, setThumbsupMode] = useState(0);
    const [heartMode, setHeartMode] = useState(0)
    const [username, setUsername] = useState();
    
    useEffect(()=>{
        if(!accesstoken){return;}
        async function fetchUsername(){
            const u = await axios.post('http://34.229.241.108:8888/auth/protected', {}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res.data.user.username); return res.data.user.username});
           setUsername(u);
        }
        fetchUsername();
        setThumbsupMode(0);
        setHeartMode(0);
    }, [])
    // 이미지를 클릭할 때 호출되는 함수
    const handleThumbsupClick = () => {
        if (thumbsupMode === 0) {
            // Thumbsup 모드를 활성화하고 클릭 횟수를 증가시킴
            setThumbsupMode(1);
            axios.post('http://34.229.241.108:8888/posts/like', {content:content, date:date, author:author, topic:topic}, {headers: {'accesstoken': cookie.load('accesstoken')}}).then(()=>{alert('좋아요를 누르셨습니다!')})
        } else {
            alert('이미 좋아요를 누른 글입니다!');
        }
    };


    // Heart 이미지를 클릭할 때 호출되는 함수
    const handleHeartClick = () => {
        if (heartMode === 0) {
            // Heart 모드를 활성화하고 클릭 횟수를 증가시킴
            setHeartMode(1);
            axios.post('http://34.229.241.108:8888/posts/thank', {username: username, content:content, date:date, author:author, topic:topic}, {headers: {'accesstoken': cookie.load('accesstoken')}}).then(()=>{alert('고마워요를 누르셨습니다!')})
        } else {
            // Heart 모드를 비활성화하고 클릭 횟수를 감소시킴
            alert('이미 감사해요를 누른 글입니다!');
        }
    };

    
    
        return (
            <div className = 'buttons'>
                <div className = 'image-text-wrapper'>
                    <img src={thumbsupMode ? thumbsupSelected : thumbsup} class = 'votable-image' onClick={handleThumbsupClick}/>
                </div>

                <div className = 'image-text-wrapper'>
                    <img src={heartMode ? heartSelected : heart} class='votable-image' onClick={handleHeartClick}/>
                </div>
            </div>
        )
    

}