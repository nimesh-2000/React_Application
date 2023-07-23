import './App.css';
import Nav from './components/nav/Nav';
import { RouteHandler } from './components/router/RouteHandler';
// import AdminDash from './components/admin/AdminDash';


function App() {
  return (
    <div className="App">
      <Nav/>
      <RouteHandler/>
    </div>
  );
}

export default App;
