import thumbsup from './images/thumbsup.png'
import heart from './images/heart.png'
import './readbuttons.css'

export default function Buttons(){
    const currentTime = new Date().getHours(); /* currentTime이랑 출력하게 될 글의 작성 시간이랑 비교.*/

    const thumbsupMode = 0
    const heartMode = 0
    const handleThumbsupClick = () => {
        // ThumbsupClick수를 1 증가시킴 / 감소시킴
        // class에 thumbsupClicked를 추가 / 제거

    }

    const handleHeartClick = () => {
        // HeartClick수를 1 증가시킴 / 감소시킴
        // class에 heartClicked를 추가 / 제거

    }
    if (1<2) { /* 만일 currentTime이 너무 늦어서 글을 평가하면 안되는 경우 : */
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
    } else {
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