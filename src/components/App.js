import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";  // Import NavBar here
import { name, city, bio, color, links } from "../data/user"; 

function App() {
  return (
    <div>
      <NavBar /> {/* Ensure NavBar is included */}
      <Home name={name} city={city} color={color} />
      <About bio={bio} links={links} />
    </div>
  );
}

export default App;
