import { Form, Segment, Button } from "semantic-ui-react";
import Header from "../component/Header";
import Logo from "./images/geulsup.png";
import '../routes/main.css'
import { Link } from "react-router-dom";

export default function Main(){

    
    return(
        <div>
            <Header></Header>

            <div className="frontLogo">
                <img src={Logo} style={{width: '300px'}}></img>
            </div>

            <div>

            </div>

            <div className='frontQuote'>
            그 누가 길을 묻거든
            눈 들어 관악을 보게 하라.
            이마가 시원한 봉우리
            기슭이마다 어린 예지의 서기가
            오랜 주라기(朱羅紀)의 지층을 씻어내린다
            헐몬의 이슬이 시온의 산들에 내리듯이
            관악의 이마에 흐르는 보배로운 기름이여
            영원한 생명의 터전이여.
            </div>

            <div>

            </div>

            <div className="frontButtons">
                <span style={{margin: '30px'}}>
                    <Link to='/write'><Button> 글 쓰러 가기</Button></Link>
                </span>
                <span style={{margin: '30px'}}>
                    <Link to='/read'><Button> 글 읽으러 가기</Button></Link>
                </span>
            </div>

            {/* <div className="frontSlide">
                소주제를 보시려면 아래로 내려주세요!
            </div>

            <div className="frontShape">
                ▼
            </div> */}

            

        </div>

    )
}