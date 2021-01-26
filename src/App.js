import { Page1 } from "./Pages/Page1";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import  "./App.css";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route path="/">
    <Page1/>
    </Route>
    <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
