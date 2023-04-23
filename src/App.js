import "./App.css";
import Cards from "./components/cards/cards";
import Categories from "./components/categories";
import Box from "./components/mainside/mainside";
import Navbar from "./components/navbar/navbar";
import Recruiters from "./components/recruiters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Box />
      <Recruiters />
    </div>
  );
}

export default App;
