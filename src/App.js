import "./App.css";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import PrivateRoute from "./pages/PirveteRoute";
import ProductsPage from "./pages/products/products.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
