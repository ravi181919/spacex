import React from "react";
import Home from "./component/Home";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="w-full bg-zinc-700 h-auto scroll-smooth overflow-hidden">
      <div className="flex flex-col h-auto">
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
