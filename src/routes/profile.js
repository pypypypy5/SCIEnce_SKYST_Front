import React from 'react';
import './profile.css'
import Header from "../component/Header";
import { useEffect } from 'react';
import axios from 'axios';
import '../Forest.jpg';
import { Button } from 'semantic-ui-react';
import cookie from 'react-cookies';
export default function Profile() {
    
    const style = {
        bg:{
            background: 'Forest.jpg'
        }
    }
    let data;
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         data = await axios.get('http://localhost:8888/posts/dashboard', {username: 'qdrptd'}).then((res)=>{
                
    //             return res.data;
    //         })
    //         console.log(data);
    //     }
    //     fetchData();
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:8888/posts/dashboard', {body: {username: 'qdrptd'}})
            const data = response.data;
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    console.log(data);
    return (
        <div>
            <Header></Header>
            {data.map((d) => {d.title})}
            <Button onClick={()=>{alert(data)}}/>
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


            <div classname = 'ThanksGave'>
                감사를 남긴 글들
            </div>

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
            <div classname = 'Forest1' style={style.bg}></div>
        </div>
    );
}