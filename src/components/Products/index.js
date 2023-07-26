import {Component} from 'react'
import * as Loader from 'react-loader-spinner'
import Header from '../Header'
import ProductsCard from '../ProductsCard'
import './index.css'

class Products extends Component {
  state = {allProductList: [], searchInput: '', isLoading: true}

  componentDidMount = () => {
    this.renderProduct()
  }

  renderProduct = async () => {
    const url = 'https://fakestoreapi.com/products'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      this.setState({allProductList: fetchedData, isLoading: false})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }
  // Search can be done by providing the searchInput value in componentDidMount method in which again filtered list can be trace.

  render() {
    const {allProductList, searchInput, isLoading} = this.state
    return isLoading ? (
      <div className="products-loader-container">
        <Loader.TailSpin
          type="ThreeDots"
          color="#0b69ff"
          height={50}
          width={50}
        />
      </div>
    ) : (
      <div className="products">
        <Header />
        <h1 className="products-heading">Home/products</h1>
        <div className="all-products-container">
          <div className="search-products-container">
            <h2 className="all-product-head">All Products</h2>
            <input
              type="search"
              className="search-box"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="unordered-list">
            {allProductList.map(product => (
              <ProductsCard key={product.id} productData={product} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Products
