import {Link} from 'react-router-dom'
import './index.css'

const ProductsCard = props => {
  const {productData} = props
  const {id, image, price, title, rating} = productData

  return (
    <Link to={`/products/${id}`} className="item-link">
      <li className="ordered-list">
        <img src={image} alt="product" className="product-image" />
        <div className="title-and-all">
          <h1 className="title">{title}</h1>
          <div className="price-and-rating">
            <p className="price">
              <span className="highlighted">Price:</span> {price}
            </p>
            <p className="rating">
              <span className="highlighted">Rating:</span> {rating.rate}
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProductsCard
