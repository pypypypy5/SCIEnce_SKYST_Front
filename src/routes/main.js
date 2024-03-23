import { Form, Segment } from "semantic-ui-react";

export default function Main(){
    return(

        <div>
            <Form>
            <Form.Field>
                <label>확인 질문</label>
                <Form.Input
                // placeholder='확인 질문'
                // onChange={(event, value) => {
                //     setVal(value.value);
                // }}
                />
            </Form.Field>
            <Form.Field>
                <label>전화번호</label>
                <Form.Input
                // fluid type='tel'
                // placeholder='전화번호'
                // disabled={val!=='sshs1sshs!'}
                action={{
                    content: '인증번호 전송',
                    // loading: otploading,
                    // disabled: !phone_p.test(phone),
                    // onClick: sendOTP
                }}
                // onChange={(event, value) => {
                //     setPhone(value.value);  
                // }}
                />
            </Form.Field>
            <div id="recaptcha-container" className="mb-3"></div>
            <Form.Field
                // disabled={confirmation === undefined}
            >
                <label>인증번호</label>
                <Form.Input
                // fluid
                // placeholder='인증번호'
                action={{
                    content: '로그인',
                    // onClick: validateOTP
                }}
                // onChange={(event, value) => {
                //     setOtp(value.value);
                // }}
                // error={otperr ?
                //     { content: '인증에 실패하였습니다.', pointing: 'above' } :
                //     false
                // }
                />
            </Form.Field>
            </Form>
        </div>
    )
}