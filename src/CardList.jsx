import { useSelector, useDispatch } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function CardList() {
  const dispatch = useDispatch();
  const cardSelector = useSelector((state) => state.card.items);
  const [cardItem, setCardItem] = useState(cardSelector)
  const navigate = useNavigate()

  useEffect(() => {
    setCardItem(cardSelector)
  }, [cardSelector])

  const manageQuantity = async (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1
    const cardTempItem = cardSelector.map((item) => {
      return item.id === id ? { ...item, quantity } : item
    })
    setCardItem(cardTempItem)
  }

  const handlePlaceOrder = () => {
    dispatch(clearAllItems())
    localStorage.clear('card');
    alert("Order Place Successful.")
    navigate('/')
  }

  return (
    <div className="cart-container">
      <h2>Your Cart Items</h2>

      <button className="remove-btn remove-all" onClick={() => dispatch(clearAllItems())}>Remove All</button>
      {cardItem.length === 0 ? (
        <p className="empty">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-grid">

          {cardItem?.map((item) => (
            <div key={item.id}>
              <div className="cart-card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>{item.brand}</p>
                  <p className="price">${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}</p>
                </div>

                <div style={{ display: "flex", gap: '5px' }}>
                  <input onChange={(e) => manageQuantity(item.id, e.target.value)} type="number" placeholder="Enter Quantity" value={item.quantity ? item.quantity : 1} />
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div>
            <h1 style={{ display: "inline-block" }}>Totle Price: ${(cardItem.reduce((sum, item) =>
              item.quantity ? sum + item.price * item.quantity : sum + item.price, 0).toFixed(2))}
            </h1>
            <button onClick={handlePlaceOrder} className="order-btn" >Order Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardList;