import { Form, Segment } from "semantic-ui-react";
import Header from "../component/Header";

const style = {
    LoginString: {
        display: 'flex',
        flex_direction: 'column',
        align_items: 'center',
        padding: '0px',
        gap: '2px',
    
        position: 'absolute',
        width: '373px',
        height: '150px',
        left: '746px',
        top: '200px'
    },
    InstructionString: {
        display: 'flex',
        flex_direction: 'column',
        align_items: 'center',
        padding: '0px',
        gap: '2px',

        position: 'absolute',
        width: '320px',
        height: '104px',
        left: '675px',
        top: '249px'
    },
    Form:{
        display: 'flex',
        flex_direction: 'column',
        align_items: 'center',
        padding: '0px',
        gap: '2px',

        position: 'absolute',
        width: '600px',
        left: '575px',
        top: '350px'
    }
}


export default function Login(){
    return(
        <div>
        <Header></Header>
            <div style={style.LoginString}>
                <h1>로그인</h1>
                <br/>
                <br/>
                
            </div>
            <div style={style.InstructionString}>
            필명과 비밀번호를 입력하고 로그인하세요.
            </div>


            <Form style={style.Form}>
                <div>
                <Form.Field>
                    <label>확인 질문</label>
                    <Form.Input
                    />
                </Form.Field>
                </div>
                <div>
                <Form.Field>
                    <label>전화번호</label>
                    <Form.Input
                    />
                </Form.Field>
                </div>
                <div>
                <Form.Field
                >
                    <label>인증번호</label>
                    <Form.Input
                    />
                </Form.Field>
                </div>
            </Form>
        </div>
    )
}