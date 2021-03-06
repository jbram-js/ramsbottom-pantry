import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import WhatWeNeed from "./WhatWeNeed";
import Request from "./Request";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/Controller.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <About />
      <WhatWeNeed />
      <Request />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
