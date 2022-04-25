import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AllImages from './allimages';
import CreateCollection from './createcollection';
import Dashboard from './dashboard';
import PageNotFound from './pagenotfound';
import AddImage from './addimage'

function App(){
  console.log("route")
  return(
    // <BrowserRouter>
        <Switch>
          <Route path="/create-collection" component={CreateCollection} />
          <Route path="/" exact >
            <Dashboard />
          </Route>
          <Route path="/add-image/:id" component={AddImage} />
          <Route path="/all-images/:id" component={AllImages} />
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