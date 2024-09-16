import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import FriendsList from "./Components/FriendsList";
import LoginForm from "./Components/LoginForm";
import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post("/api/logout")
      .then((res) => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link className='App-link' to="/login">Login</Link>
          </li>
          <li>
            <Link className='App-link' onClick={logout}>Logout</Link>
          </li>
        </ul>

        <Switch>
          <ProtectedRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
