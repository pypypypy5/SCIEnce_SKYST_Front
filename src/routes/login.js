import { Form, Segment } from "semantic-ui-react";
import Header from "../component/Header";
import './login.css'

import { useState, useEffect } from "react";

export default function Login(){

    return(
        <div>
        <Header></Header>
            <div className="login_box">
                <h1>로그인</h1>
                <br/>
                <br/>
                
            </div>
            <div className="guide">
            필명과 비밀번호를 입력하고 로그인하세요.
            </div>

            <Form>
                <div className="nickname">
                <Form.Field>
                    <label>필명</label>
                    <Form.Input
                    />
                </Form.Field>
                </div>
                <div className="password">
                <Form.Field>
                    <label>비밀번호</label>
                    <Form.Input
                    />
                </Form.Field>
                </div>
                
            </Form>
        </div>
    )
}