import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "./redux/slice"
import { useEffect } from "react"
import { fetchProducts } from "./redux/productSlice"

function Product() {
  const dispatch = useDispatch()

  const productSelector = useSelector((state) => state.products.items)
  const cardSelector = useSelector((state) => state.card.items)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (

    <div className="container">
      {
        productSelector.length > 0 && productSelector?.map((item) => (
          <div className="card" key={item.id}>
            <div className="img-container">
              <img src={item.thumbnail} alt={item.title} />
              <span className="badge">{item.brand}</span>
            </div>

            <div className="card-content">
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description.slice(0, 60)}...</p>

              <div className="card-bottom">
                <div className="price-rating">
                  <span className="price">${item.price}</span>
                  <span className="rating">⭐ {item.rating}</span>
                </div>

                {
                  cardSelector.find(cardItem => cardItem.id === item.id) ?
                    <button className="btn btn-disable" onClick={() => dispatch(removeItem(item))}>Remove from Cart</button>
                    :
                    <button className="btn" onClick={() => dispatch(addItem(item))}>Add to Cart</button>
                }

              </div>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default Product
