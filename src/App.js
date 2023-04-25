import Instructions from "./Instructions";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import Students from "./Students";
import { getStudents } from "./services/Utils.js";
import { useState, useEffect } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);
  // console.log(students);
  return (
    <div className="App">
      <nav>
        <a className="link" href="#">
          Students
        </a>
      </nav>
      <div className="Instructions">
        <div className="block">
          Render your components here
          <Routes>
            <Route path="/" element={<Students students={students} />} />
            <Route path="/" element={} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
