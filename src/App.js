import Navbar from './navbar';
import Home from './home';
import Create from './create'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './notFound';
function App() {
 
  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path = '/'> <Home /> </Route>
            <Route exact path = '/create'> <Create /> </Route>
            <Route exact path = '/blogs/:id'><BlogDetails> </BlogDetails></Route>
            <Route path = "*"> <NotFound/> </Route>
          </Switch>    
        </div>
        
      </div>
    </Router>
  );
}

export default App;
