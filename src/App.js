import {Route, BrowserRouter, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
