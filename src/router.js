import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom" 
import Admin from './admin.js'
import About from './pages/about/index.js'
import Topic from './pages/topic/topic.js'
import TransferMsg from './pages/transferMsg'

function AuthExample() {
  return (
    <Router>
      <Admin>
        <ul>
          <li>
            <Link to="/about">Public Page</Link>
          </li>
          <li>
            <Link to="/topic">protected Page</Link>
          </li>
          <li>
            <Link to="/transferMsg">protected Page</Link>
          </li>
        </ul>
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
        <Route path="/transferMsg" component={TransferMsg} />
      </Admin>
    </Router>
  )
}


export default AuthExample;