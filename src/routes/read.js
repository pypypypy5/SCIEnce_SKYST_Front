import Header from '../component/Header.js';
import './read.css'
import Buttons from './ReadButtons.js'


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

                <Buttons></Buttons>


            </div>
        </div>
    )
}