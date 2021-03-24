import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Python from './Subpages/Python'
import Java from './Subpages/Java'
import NodeJS from './Subpages/NodeJS'

export default function Topic() {
    return (
        <div>
            <h1>Programlama Dilleri</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/topics/python">Paython</Link>
                        </li>
                        <li>
                            <Link to="/topics/java">Java</Link>
                        </li>
                        <li>
                            <Link to="/topics/nodeJS">NodeJS</Link>
                        </li>
                    </ul>
                </nav>

                <hr/>
                <hr/>

                <Route exact path="/topics/python" component = {Python}/>
                <Route path="/topics/java" component = {Java}/>
                <Route path="/topics/nodeJS" component = {NodeJS}/>
            
            
            
            
            
            </BrowserRouter>
        </div>
    )
}
