import React from "react";
import Conditions from "./components/Conditions"
import Soumission from "./components/Soumission";

const App = () => {
  return (
    <div className="container mt-3">
      <Conditions></Conditions>
      <Soumission></Soumission>
    </div>
  );
};

export default App;
