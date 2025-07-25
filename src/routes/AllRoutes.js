
import { Routes, Route } from "react-router-dom"
import { Home, Cart } from "../pages"; // Assuming you have Home and Cart components

export const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} /> 
    </Routes>
  )
}
