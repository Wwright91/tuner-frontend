import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

// import FourOFour from "./Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour/>} /> */}
          </Routes>
        </main>
     </Router>
    </div>
  );
}

export default App;
