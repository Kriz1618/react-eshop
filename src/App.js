import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Checkout, Header, Home, Login} from './components';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={<Checkout /> } />

          <Route path="/" element={<Home />} />  

        </Routes>
      </Router>
    </div>
  );
}

export default App;
