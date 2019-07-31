import React, { useCallback } from 'react';
import './Toolbar.css';
import { FaCogs, FaQuestionCircle, FaRegCalendarAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom'

import Calendar from '../Calendar/Calendar';
import Modal from '../Modal/index'







const toolbar = () => (
    <header className="toolbar">
           <nav className="toolbar__navigation" >         

            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>                
             
                        <button >                       
                            <FaRegCalendarAlt/><Calendar/>
                        </button>
                    </li>
                    <li>
                        <button > 
                            <FaCogs/><Modal/>                            
                        </button>
                    </li>
                    <li>                        
                        <button >
                            <FaQuestionCircle/>
                        </button>                     
                    </li>
                </ul>
            </div>
        </nav>
        
    </header>
    
    

);

export default toolbar;
