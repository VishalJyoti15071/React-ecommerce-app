import {Component} from 'react'
import {CgMathPlus, CgMathMinus} from 'react-icons/cg'
import * as Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

class ProductDetails extends Component {
  state = {productDetails: {}, quantity: 1, isLoading: true}

  componentDidMount() {
    this.getProductItem()
  }

  getProductItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const updatedData = await response.json()
    this.setState({productDetails: updatedData, isLoading: false})
  }

  renderProductItemDetails = () => {
    const {productDetails, quantity} = this.state
    const {image, price, title, rating, description, category} = productDetails

    return (
      <div className="product-info">
        <Header />
        <div className="product-details">
          <h2 className="product-details-title">{title}</h2>
          <div className="product-card-details">
            <img className="product-pic" src={image} alt={title} />
            <div className="product-sub-card-details">
              <p className="product-para">{description}</p>
              <p className="product-para">
                <span className="product-details-tags">Category: </span>
                {category}
              </p>
              <p className="product-para">
                <span className="product-details-tags">Category: </span>
                {price}
              </p>
              <p className="product-para">
                <span className="product-details-tags">Rating: </span>
                {rating.rate}
              </p>
              <div className="quantity-container">
                <button
                  type="button"
                  className="quantity-button"
                  onClick={this.onDecreaseButton}
                >
                  <CgMathMinus className="quantity-icon" />
                </button>
                <p className="quantity">{quantity}</p>
                <button
                  type="button"
                  className="quantity-button"
                  onClick={this.onIncreaseButton}
                >
                  <CgMathPlus className="quantity-icon" />
                </button>
              </div>
              <button type="button" className="add-to-cart">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      // Here Add to cart can be done and product with quantity can be added to cart route directly.
    )
  }

  onDecreaseButton = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncreaseButton = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div className="products-loader-container">
            <Loader.TailSpin
              type="ThreeDots"
              color="#0b69ff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          this.renderProductItemDetails()
        )}
      </div>
    )
  }
}

export default ProductDetails
