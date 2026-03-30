import Header from "./Header.jsx"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from "./Product.jsx"
import CardList from "./CardList"
import Footer from "./Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/card" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
