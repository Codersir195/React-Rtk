import { useSelector } from "react-redux"

function Header() {
  const cardSelector = useSelector((state)=>state.card.items)

  return (
    <header className="header">
      <div className="head-container">
        
        <div className="logo">MySite</div>

        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>

            <li className="cart-icon">
              <a href="/card">🛒</a>
              <span className="cart-count">{cardSelector.length}</span>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header