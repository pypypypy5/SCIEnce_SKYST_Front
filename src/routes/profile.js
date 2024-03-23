import React from 'react';
import './profile.css'
import Header from "../component/Header";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Forest.jpg';
import { Button } from 'semantic-ui-react';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import {Menu, MenuItem} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
export default function Profile() {
    const [show, setShow] = useState("wrote");
    const [username, setUsername] = useState();
    const [thanklist, setThanklist] = useState();
    const accesstoken = cookie.load('accesstoken');
    if(!accesstoken){
        return(
            <div>
                <Header></Header>
                <Link to='/login'>로그인</Link> 후 이용하실 수 있습니다!
            </div>
        )
        
    }
    const [post, setPost] = useState();
    useEffect(() => {
        if(!accesstoken){return;}
        async function fetchUsername(){
            const u = await axios.post('http://localhost:8888/auth/protected', {}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res.data.user.username); return res.data.user.username});
           setUsername(u);
           
        }
        fetchUsername();
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:8888/posts/dashboard', {username: username}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res); return(res);})
            const data = response.data.data;
            setPost(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
        const fetchThanklist = async () => {
            try {
              const response = await axios.post('http://localhost:8888/posts/archive', {username: username}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log("ㅁㄴㅇㄹ", res.data); return(res);})
              const data = response.data.data;
              setThanklist(data);
            } catch (error) {
              console.error(error);
            }
          };
          fetchThanklist();
      }, []);

      return (
        <div>
            <Header></Header>
            
            <div className = 'Mryourwriting'>
                {username}님, 당신의 글귀들은 지금까지 
                
            {
               // post.map((d) => {return d.topic})
            }
                {/* !!!!!!!!!!유저네임 불러오는 로직 추가 필요!!!!!!!!!!*/}
            </div>
    

            <div className='N'>
                {
                    !post?null:
                post.map((d)=>{return d.thank;}).reduce((a, b)=> a+b, 0)
                }{/*!!!!!!!!!!!!인수 불러오기!!!!!!!!!!!!*/} 
            </div>


            <div className = 'WarmHeart'>
                명의 사람들의 마음을 따뜻하게 만들어주었습니다.
            </div>

            <Menu pointing widths={2} compact >
                <MenuItem/>
                <MenuItem
                name='쓴 글'
                onClick={()=>{setShow("wrote")}}
                />
                <MenuItem
                name='저장한 글'
                onClick={()=>{setShow("thanked")}}
                />
                <MenuItem/>
            </Menu>
            {
                show==='wrote'?
                <div style={{textAlign:'center'}}>
                <span className = 'ThanksReceived'>
                쓴 글들
                </span>
                {
                    !post?null:
                    post.map((p)=>{return(
                        <Segment>
                            <div>{p.topic}, {p.date}</div>
                            <div>{p.content}</div>
                            <div>좋아요: {p.like}개, 고마워요: {p.thank}개</div>
                        </Segment>
                    )})
                }
                </div>
                :
                <div style={{textAlign:'center'}}>
                <span className = 'ThanksGave'>
                감사를 남긴 글들
                </span>
                {
                    !thanklist?null:
                    thanklist.map((p)=>{return(
                        <Segment>
                            <div>{p.topic}, {p.date}</div>
                            <div>{p.content}</div>
                        </Segment>
                    )})
                }
                </div>
            }
            {/* <div style={{textAlign: 'center'}}>
                <span className = 'ThanksReceived'>
                감사를 받은 글들
                
                </span>

                <span className='Line4' >
                </span>


                <span className = 'ThanksGave'>
                감사를 남긴 글들
                </span>

            </div>
           
            <div className = 'Line2'></div>
            <div className = 'Line3'></div>







            <div className = 'WritingBox1'></div>
            <div className = 'WritingBox2'></div>



            <div className = 'Group7'></div>
            <div className = 'Group6'></div>
            <div className = 'Group2'></div> */}
        </div>
    );
}