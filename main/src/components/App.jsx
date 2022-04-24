import { connect } from 'react-redux'
import { Switch,Route,BrowserRouter,Router } from 'react-router-dom'
import Collection from './collection';
import CreateCollection from './createcollection';
import Dashboard from './dashboard';
import PageNotFound from './pagenotfound';

function App(){
  console.log("route")
  return(
    // <BrowserRouter>
        <Switch>
          <Route path="/create-collection" exact >
            <CreateCollection />
          </Route>
          <Route path="/" exact >
            <Dashboard />
          </Route>
          <Route path="/collection" exact >
            <Collection />
          </Route>
          <Route path="*" >
            <PageNotFound />
          </Route>
        </Switch>
    // </BrowserRouter>
  )
}

function mapStateToProps(state){
  return {
    allCollection: state.allCollection,
  }
}

export default connect(mapStateToProps)(App);