import thumbsup from './images/thumbsup.png'
import heart from './images/heart.png'
import './readbuttons.css'
import React, { useState } from 'react';

export default function Buttons(){
    const currentTime = new Date().getHours(); /* currentTime이랑 출력하게 될 글의 작성 시간이랑 비교.*/

    const [thumbsupMode, setThumbsupMode] = useState(0);
    const [heartMode, setHeartMode] = useState(0)

    // 이미지를 클릭할 때 호출되는 함수
    const handleThumbsupClick = () => {
        if (thumbsupMode === 0) {
            // Thumbsup 모드를 활성화하고 클릭 횟수를 증가시킴
            setThumbsupMode(1);
            //setThumbsupClickCount(prevCount => prevCount + 1);
        } else {
            // Thumbsup 모드를 비활성화하고 클릭 횟수를 감소시킴
            setThumbsupMode(0);
            //setThumbsupClickCount(prevCount => prevCount - 1);
        }
    };


    // Heart 이미지를 클릭할 때 호출되는 함수
    const handleHeartClick = () => {
        if (heartMode === 0) {
            // Heart 모드를 활성화하고 클릭 횟수를 증가시킴
            setHeartMode(1);
            //setHeartClickCount(prevCount => prevCount + 1);
        } else {
            // Heart 모드를 비활성화하고 클릭 횟수를 감소시킴
            setHeartMode(0);
            //setHeartClickCount(prevCount => prevCount - 1);
        }
    };

    
    if (1>2) { /* 만일 currentTime이 너무 늦어서 글을 평가하면 안되는 경우 : */
        return (
            <div className = 'buttons'>
                <div className = 'image-text-wrapper'>
                    <img src={thumbsup} class = 'unvotable-image'/>
                    <div>t{/* thumbsup 수 */}</div>
                </div>
                <div className = 'image-text-wrapper'>
                    <img src={heart} class = 'unvotable-image'/>
                    <div>h{/* heart 수 */}</div>
                </div>
            </div>
        )
    } else { // 아직 평가 시간일 경우.
        return (
            <div className = 'buttons'>
                <div className = 'image-text-wrapper'>
                    <img src={thumbsup} class = 'votable-image' onClick={handleThumbsupClick}/>
                </div>

                <div className = 'image-text-wrapper'>
                    <img src={heart} class='votable-image' onClick={handleHeartClick}/>
                </div>
            </div>
        )
    }

}