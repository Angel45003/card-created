import Image1 from "./assets/bg1.jpg";
import React from "react";
import CreateCard from "./components/CreateCard";

function App() {
  return (
    <div className="grid grid-cols-2 *:m-[10px] md:grid-cols-3">
      <CreateCard image={Image1} title="Texto 1" />
      <CreateCard image={Image1} title="Texto 2" />
      <CreateCard image={Image1} title="Texto 3" />
    </div>
  );
}

export default App;
