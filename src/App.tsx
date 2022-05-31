import TodoPage from "./TodoPage";
import { uniqueId } from "lodash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

const id = uniqueId();
console.log("id is ", id);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="mx-auto max-w-7xl py-10">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Things to get done
          </h1>
          <Routes>
            <Route path="/" element={<TodoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
