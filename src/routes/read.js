import Header from '../component/Header.js';
import './read.css'
import Buttons from './ReadButtons.js'
import NextButton from './images/next.png'


export default function Read(){
    return(
        <div>
            <Header></Header>

            <div className='center-read'>
                
                <img src={NextButton} style={{width: Math.max(50)}} />

                <div className='rectangle-read'>
                    <div className='topic'>
                        Topic : {/*topic*/}
                    </div>

                    <div className='main-content'>
                        dfasdfjioadsfjooasjdfojasdfoasdjfo-asdfjoasdfojasdfojdasfojdsfojdsfojdfsojdsf
                        {/*main content*/}
                    </div>

                    <Buttons></Buttons>


                </div>

                <img src={NextButton} style={{width: Math.max(50)}} />

            </div>
        </div>
    )
}