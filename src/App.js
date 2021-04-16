// Pages
import { useState } from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <GlobalStyles />
      <Nav setSearch={setSearch} />
      <Route path={["game/:id", "/"]}>
        <Home search={search} />
      </Route>
    </div>
  );
}

export default App;
