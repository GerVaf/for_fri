import { useState } from "react";
import Core from "./utils/Core";
import Intro from "./utils/Intro";

const App = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      {accepted ? (
        <Core />
      ) : (
        <Intro onAccept={() => setAccepted(true)} />
      )}
    </div>
  );
};

export default App;