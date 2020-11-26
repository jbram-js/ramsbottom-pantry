import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Request.js";
import Request from "./Contact.js";
import WhatWeNeed from "./WhatWeNeed.js";
import "../styles/controller.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <WhatWeNeed />
      <Request />
      <Contact />
    </div>
  );
}

export default App;
