import React, {useEffect, useState} from 'react';
import './profile.css'
import Header from "../component/Header";
import axios from 'axios';

export default function Profile() {
    const [post, setPost] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:8888/posts/dashboard', {username: 'qdrptd'})
            setPost(response.data.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the async function
      }, []);
    return (
        <div>
            <Header></Header>
            {
                !post?<div>1</div>:
            <div>
            <div classname = 'Mryourwriting'>
                Username님, 당신의 글귀들은 지금까지 
                {/* !!!!!!!!!!유저네임 불러오는 로직 추가 필요!!!!!!!!!!*/}
            </div>
    

            <div className='N'>
                N{/*!!!!!!!!!!!!인수 불러오기!!!!!!!!!!!!*/} 
            </div>


            <div classname = 'WarmHeart'>
                명의 사람들의 마음을 따뜻하게
            </div>


            <div classname = 'ThanksReceived'>
                감사를 받은 글들
            </div>


            {
                    post.map((data)=>{
                        return(
                            <div>{data.topic}</div>
                        )
                    })
                }
            <div classname = 'ThanksGave'>
                감사를 남긴 글들
            </div>
            </div>
            }
            <div classname = 'WritingBox1'></div>{/*글박스 불러오는 로직 추가필요*/}
            <div classname = 'WritingBox2'></div>


            <div classname = '임시기준선1'></div>
            <div classname = '임시기준선2'></div>
            <div classname = 'Line2'></div>
            <div classname = 'Line3'></div>
            <div classname = 'Line4'></div>

            <div classname = 'Group7'></div>
            <div classname = 'Group6'></div>
            <div classname = 'Group2'></div>
            <div classname = 'Forest1'></div>
            
        </div>
    );
}