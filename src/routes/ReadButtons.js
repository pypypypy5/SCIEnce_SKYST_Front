import thumbsup from './images/thumbsup.png'
import heart from './images/heart.png'
import './readbuttons.css'

export default function Buttons(){
    const currentTime = new Date().getHours(); /* currentTime이랑 출력하게 될 글의 작성 시간이랑 비교.*/

    if (1<2) { /* 만일 currentTime이 너무 늦어서 글을 평가하면 안되는 경우 : */
        return (
            <div className = 'buttons'>
                <div className = 'image-text-wrapper'>
                    <img src={thumbsup} class = 'unvotable-image'/>
                    <div>To late</div>
                    {/* thumbsup 수 */}
                </div>
                <div className = 'image-text-wrapper'>
                    <img src={heart} class = 'unvotable-image'/>
                    <div>To late</div>
                    {/* heart 수 */}
                </div>
            </div>
        )
    } else {
        return (
            <div className = 'buttons'>
                <img src={thumbsup} class = 'votable-image'/>
                <img src={heart} class='votable-image'/>
            </div>
        )
    }

}