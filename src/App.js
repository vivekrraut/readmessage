import React from "react";
import Message from "./Message";
import Navbar from "./Navbar";

function App() {
  const yourMessage =
    "Hope you are here...❤ Welcome Dear ! Reaaly missing You So Much ... You will see my replies Here :)";

  return (
    <div className="App">
      <Navbar />
      <Message message={yourMessage} />
    </div>
  );
}

export default App;
