import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Header from '../component/Header';
import './login.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleRegister = async () => {
        // 여기서 서버로 id와 password를 전송하는 로직을 작성하세요.
        await axios.post('http://34.229.241.108:8888/auth/register', {username: id, password: password}).then((res)=>{
            alert('가입에 성공했습니다!');
            nav('/login');
        }).catch((e)=>{
            console.error(e);
            alert('가입에 실패했습니다!');
        })
    };

    return (
        <div>
            <Header />
            <div className="login_box">
                <h1>회원가입</h1>
                <br />
                <br />
            </div>
            <div className="guide">
                필명과 비밀번호를 입력하고 가입하세요.
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
                <Button onClick={handleRegister} className='login-button'>회원가입</Button>
                </div>
            </Form>
        </div>
    );
}