import Header from '../component/Header.js';
import './read.css'
import thumbsup from './images/thumbsup.png'
import heart from './images/heart.png'


export default function Read(){
    return(
        <div>
            <Header></Header>

            <div className='rectangle' style={{marginTop: Math.max(50, 10 * window.innerHeight / 100) + 'px'}}>
                <div className='topic'>
                    Topic : {/*topic*/}
                </div>

                <div className='main-content'>
                    df
                    {/*main content*/}
                </div>

                <div className='buttons'>
                        <img src={thumbsup} className='imagebutton'/>
                        
                        <img src={heart} className='imagebutton'/>
                    
                </div>
            </div>
        </div>
    )
}