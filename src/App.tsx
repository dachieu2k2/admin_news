import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import Dashboard from "./Pages/DashBoard/DashBoard";
import { CreateNews, DetailNews, News } from "./Pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="news" element={<News />} />
          <Route path="news/create" element={<CreateNews />} />
          <Route path="news/:id" element={<DetailNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
