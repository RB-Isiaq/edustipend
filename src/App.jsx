import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 p-6 w-full justify-center items-center gap-10 h-max md:h-screen">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
