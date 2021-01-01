import {Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Review from "./components/Review";
import Menu from "./components/Menu";
import CreateTitle from "./components/CreateTitle";
import EditTitle from "./components/EditTitle";


function App() {
  return (
    <div className="d-flex flex-column mainHeight ">
      <Navbar ></Navbar>
      <Switch >
          <Route path="/" exact component={Home}></Route>
          <Route path="/review" component={Review}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/title/create" component={CreateTitle}></Route>
          <Route path="/title/:id" component={EditTitle}></Route>
          
      </Switch>
      
      <Footer></Footer>
    </div>
   
  );
}

export default App;
