import Header from '../component/Header.js';
import './read.css'
import Buttons from './ReadButtons.js'
import NextButton from './images/next.png'
import BeforeButton from './images/before.png'

import React, { useState } from 'react';

export default function Read(){

    const nextaddress = 12345
    const beforeaddress = 12347
    return(
        <div>
            <Header></Header>

            <div className='center-read'>
                
                <a href={'http://localhost:3000/read/'+String(beforeaddress)}>
                    <img src={BeforeButton} style={{width: Math.max(50)}}/>
                </a>

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
 
                <a href={'http://localhost:3000/read/'+String(nextaddress)}> 
                    <img src={NextButton} style={{width: Math.max(50)}}/>  
                </a>

            </div>
        </div>
    )
}