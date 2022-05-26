import TodoPage from "./TodoPage";
import { uniqueId } from "lodash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upgrade from "./Upgrade";
import Header from "./Header";

const id = uniqueId();
console.log("id is ", id);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/upgrade" element={<Upgrade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
