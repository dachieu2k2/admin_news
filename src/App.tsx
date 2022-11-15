import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import NewsContextProvider from "./Contexts/news";
import Dashboard from "./Pages/DashBoard/DashBoard";
import { CreateNews, DetailNews, News } from "./Pages/News";

function App() {
  return (
    <BrowserRouter>
      <NewsContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="news" element={<News />} />
            <Route path="news/create" element={<CreateNews />} />
            <Route path="news/:id" element={<DetailNews />} />
          </Route>
        </Routes>
      </NewsContextProvider>
    </BrowserRouter>
  );
}

export default App;
