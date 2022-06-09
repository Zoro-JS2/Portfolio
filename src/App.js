import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Carousel from "./components/Pages/CarouselContainer";
import BIO from "./components/Pages/BIO";
import Car from "./components/Pages/Car";
import Sushi from "./components/Pages/Sushi";
import MainPage from "./components/Pages/MainPage";
import Projects from "./components/Pages/Projects";
import ToDo from "./components/Todo/ToDoList";
import Security from "./components/Pages/Security";
import Store from "./components/Pages/Store";
import Info from "./components/Pages/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import Galery from "./components/Pages/Galery";
function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/carousel' component={Carousel} />
            <Route path='/bio' component={BIO} />
            <Route path='/car' component={Car} />
            <Route path='/mainbar' component={Sushi} />
            <Route path='/home' component={MainPage} />
            <Route path='/projects' component={Projects} />
            <Route path='/todo' component={ToDo} />
            <Route path='/security' component={Security} />
            <Route path='/store' component={Store} />
            <Route path='/updateInfo' component={Info} />
            <Route path='/gallery' component={Galery} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
