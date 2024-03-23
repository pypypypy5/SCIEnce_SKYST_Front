import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Header from '../component/Header';
import './login.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    const handleLogin = async () => {
        // 여기서 서버로 id와 password를 전송하는 로직을 작성하세요.
        await axios.post('http://34.229.241.108:8888/auth/login', {username: id, password: password}).then((res)=>{
            cookie.save('accesstoken', res.data.token);
            alert('로그인에 성공했습니다!');
            window.location.reload();
            nav('/')
        }).catch((e)=>{
            console.error(e);
            alert('로그인에 실패했습니다!');
        })
    };

    return (
        <div>
            <Header />
            <div className="login_box">
                <h1>로그인</h1>
                <br />
                <br />
            </div>
            <div className="guide">
                필명과 비밀번호를 입력하고 로그인하세요.
            </div>
            <Form>
                <div className="nickname">
                    <Form.Field>
                        <label>필명</label>
                        <Form.Input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Field>
                </div>
                <div className="password">
                    <Form.Field>
                        <label>비밀번호</label>
                        <Form.Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                </div>
                <div className='login-button'>
                <Button onClick={handleLogin} className='login-button'>로그인</Button>
                </div>
            </Form>
        </div>
    );
}