import Header from '../component/Header.js';
import './read.css'
import Buttons from './ReadButtons.js'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
const date = new Date();
const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
console.log('dateString', dateString)


export default function Read(){
    const nav = useNavigate();
    const [post, setPost] = useState();

    const accesstoken = cookie.load('accesstoken');
    if(!accesstoken){
        return(
            <div>
                <Header></Header>
                <Link to='/login'>로그인</Link> 후 이용하실 수 있습니다!
            </div>
        )
        
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`http://34.229.241.108:8888/posts/next`, {date: dateString}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res.data); return(res)})
            console.log(response.data)
            setPost(response.data.data)
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the async function
      }, []);
    console.log(post)
    return(
        <div>
            <Header></Header>
            {/* {
                !post?<div>1</div>:
                post.topic
            } */}
            {
            !post?<div>1</div>:
            <div>
            <div className='rectangle-read' style={{marginTop: Math.max(50, 10 * window.innerHeight / 100) + 'px'}}>
                
                
                <div className='topic'>
                Topic : {post.topic}
                </div>
                <div className='main-content'>
                   { post.content}
                </div>
                <Buttons content={post.content} topic={post.topic} author={post.author} date={post.date}></Buttons>


            </div>
            <div className='nextButton'>
            <Button onClick={async ()=>{
                const response = await axios.post(`http://34.229.241.108:8888/posts/next`, {date: dateString}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res.data); return(res)})
                console.log(response.data)
                setPost(response.data.data)
            }}
            className='nextButton'
            >다음</Button>
            </div></div>
            
            }
        </div>
    )
}