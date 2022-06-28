import TodoPage from "./components/TodoPage";
import UsersPage from "./components/UsersPage";
import { uniqueId } from "lodash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const id = uniqueId();
console.log("id is ", id);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="mx-auto max-w-7xl py-10">
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/userPage" element={<UsersPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
