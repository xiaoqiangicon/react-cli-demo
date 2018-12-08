import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom" 
import Home from './components/Home'
import Admin from './admin.js'
import Buttons from './pages/ui/button.js'
import Modals from './pages/ui/modals.js'

function AuthExample() {
  return (
    <Router>
      <Route path="/" render={()=>
        <Admin>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ui/buttons" component={Buttons} />
            <Route path="/ui/modals" component={Modals} />
            {/* <Route path="/ui/loadings" component={Loadings} />
            <Route path="/ui/notification" component={Notice} /> */}
          </Switch>
        </Admin>
      } />
    </Router>
  )
}


export default AuthExample;