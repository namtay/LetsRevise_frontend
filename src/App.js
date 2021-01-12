import {Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Review from "./components/Review";
import Menu from "./components/Menu";
import CreateTitle from "./components/CreateTitle";
import EditTitle from "./components/EditTitle";
import ViewQuestions from "./components/ViewQuestions";
import CreateQuestion from "./components/CreateQuestion";
import EditQuestion from "./components/EditQuestion";
import ViewQuestion from "./components/ViewQuestion";
import {TitleProvider} from "./components/context/TitleContext";




function App() {
  return (
    <div className=" mainHeight ">
      <Navbar ></Navbar>
      <Switch >
          <Route path="/" exact component={Home}></Route>
          <Route path="/review/:id" component={Review}></Route>
          <TitleProvider>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/title/create" component={CreateTitle}></Route>
            <Route path="/title/:id" component={EditTitle}></Route>
            
          
          <Route path="/question/:id" component={ViewQuestions}></Route>
          <Route path="/create/question/:titleId" component={CreateQuestion}></Route>
          <Route path="/edit/question/:id" component={EditQuestion}></Route>
          <Route path="/view/question/:id" component={ViewQuestion}></Route>
          </TitleProvider> 
          
      </Switch>
      
      <Footer></Footer>
    </div>
   
  );
}

export default App;
