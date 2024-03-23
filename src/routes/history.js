import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import './history.css'
import Header from "../component/Header";
import axios from 'axios';
import cookie from 'react-cookies';

export default function History() {

    return (
        <div>
            <Header></Header>

            <div className='title'> 
                History
            </div>


        </div>
    );
};
