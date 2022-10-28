import Userabout from "./component/Userabout";
import Usercontact from "./component/usercontact";
import Home from "./component/home";
import Users from "./component/Users";
import Error from "./component/Error";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./component/fallback";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link className="Linkss" to="/">
            Home
          </Link>
        </header>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="Users" element={<Users />}>
              <Route path="Users/usercontact" element={<Usercontact />} />
              <Route path=":id" element={<Userabout />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
