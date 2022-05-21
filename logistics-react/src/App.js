import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import ItemList from "./components/item-list.component"
import EditItem from "./components/edit-item.component"
import CreateItem from "./components/create-item.component"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Navbar />
        <br/>
            <Routes>
                <Route path="/" exact element={<ItemList />} />
                <Route path="/edit/:id"  element={<EditItem />} />
                <Route path="/create"  element={<CreateItem />} />
            </Routes>
    </div>
  );
}

export default App;
