import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/website-components/Home";
import Layout from "../components/layout/Layout";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
