import logo from "./logo.svg";
import "./App.css";
import Create from "./Crud/Create";
import ViewData from "./Crud/ViewData";
import { Route, Routes } from "react-router-dom";
import Update from "./Crud/Update";

function App() {
  return (
    <div className="container text-center">
      <h1>React Crud Using Axios</h1>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/view" element={<ViewData />} />
        <Route path="/edit-record/:id" element={<Update />} />
      </Routes>
      {/* <Create /> */}
      {/* <ViewData /> */}
    </div>
  );
}

export default App;
