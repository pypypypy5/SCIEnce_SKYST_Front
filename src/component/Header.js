import { Menu, MenuItem, Form, Segment, Button, MenuMenu, Image} from "semantic-ui-react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import { useState } from "react";
import axios from "axios";
import image from '../routes/images/geulsup.png';

export default function Header(){
    const [username, setUsername] = useState('');
    const accesstoken = cookie.load('accesstoken')
    const nav = useNavigate();
    
    useEffect(()=>{
        if(!accesstoken){return;}
        async function fetchUsername(){
            const u = await axios.post('http://34.229.241.108:8888/auth/protected', {}, {headers: {'accesstoken': accesstoken}}).then((res)=>{console.log(res.data.user.username); return res.data.user.username});
           setUsername(u);
        }
        fetchUsername();
    }, [])
    return(
        <div>
            <Segment inverted color='olive'>
            <Menu secondary widths={10}>
                <MenuItem position="left" onClick={()=>{nav('/')}}>
                    <Image src={image}/>
                </MenuItem>
                <MenuItem/>
                <MenuItem onClick={()=>{nav('/write')}}>
                    글 쓰기
                </MenuItem>
                <MenuItem onClick={()=>{nav('/read')}}>
                    글 읽기
                </MenuItem>
                <MenuItem onClick={()=>{nav('/history')}}>
                    히스토리
                </MenuItem>
                <MenuItem/><MenuItem/>
                {
                    accesstoken? null : <MenuItem onClick={()=>{nav('/login')}}>
                        로그인
                    </MenuItem>
                }
                {
                    accesstoken? null : <MenuItem onClick={()=>{nav('/signup')}}>
                        회원가입
                    </MenuItem>
                }
                {
                    !accesstoken? null : <MenuItem onClick={()=>{nav('/profile')}}>
                       {username}
                    </MenuItem>
                }
                {
                    !accesstoken? null : <MenuItem onClick={()=>{cookie.remove('accesstoken'); window.location.reload();}}>
                        로그아웃
                    </MenuItem>
                }
            </Menu>
            </Segment>
        </div>
    )
}