import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
        <GlobalStyles />
        <Routes>
            <Route path = "/" exact element = {<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;
