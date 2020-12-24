import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from './components/Contact';
import {Provider} from 'react-redux';
import store from './store';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
function App() {
  return (
    <Provider store={store}>
    <Router>
   
    <Navbar/>
    <div className="container mt-5">
      <Switch >
    
      <Route path="/" exact component={Contact}/>
      <Route path="/contacts/add" exact component={AddContact}/>
      <Route path="/contacts/edit/:id" exact component={EditContact}/>
     </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
