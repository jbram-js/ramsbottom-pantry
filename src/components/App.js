import "../styles/App.css";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Request.js";
import Request from "./Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Request />
      <Contact />
    </div>
  );
}

export default App;
