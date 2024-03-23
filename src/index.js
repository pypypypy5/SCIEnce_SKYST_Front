import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Main from './routes/main.js';
import Read from './routes/read.js';
import Header from './component/Header.js';
import Write from './routes/write.js';



const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <div>
        {/* asdf */}
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Main/>}/>
                <Route path='read' element={<Read/>}/>
                <Route path='write' element={<Write/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

