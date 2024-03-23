import Header from '../component/Header.js';
import './read.css'
import Buttons from './ReadButtons.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

const date = new Date();
const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
console.log('dateString', dateString)
export default function Read(){
    const [post, setPost] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`http://localhost:8888/posts/next`, {date: dateString}).then((res)=>{console.log(res.data); return(res)})
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
            
            <div className='rectangle' style={{marginTop: Math.max(50, 10 * window.innerHeight / 100) + 'px'}}>
                <div className='topic'>
                Topic : {post.topic}
                </div>

                <div className='main-content'>
                   { post.content}
                </div>

                <Buttons></Buttons>


            </div>
            }
        </div>
    )
}