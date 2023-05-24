import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyRoutes from "./MyRoutes";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
