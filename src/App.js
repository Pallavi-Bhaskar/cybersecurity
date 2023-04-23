import "./App.css";
import Cards from "./components/cards/cards";

import Box from "./components/hero/heroform";
import Navbar from "./components/navbar/navbar";
import Recruiters from "./pages/hero";
import Hero from "./pages/heroGirl";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recruiters />
      <Hero />

      <Cards />
    </div>
  );
}

export default App;
