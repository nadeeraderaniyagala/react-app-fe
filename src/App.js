import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from "./components/simpletodolist5";
import CreateTask from "./components/createBook";
import EditTask from "./components/edittask1";


// import Junk from "./components/junk";

export default function App3() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<BookList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
