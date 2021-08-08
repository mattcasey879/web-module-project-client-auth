import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import FriendsList from "./Components/FriendsList";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" />
          <ProtectedRoute path="/friends" component={FriendsList} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
