import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="card-home-container">
      <h1 className="home-heading">
        About <span className="company">Eteva Tech Consulting</span>
      </h1>
      <p className="description">
        Eteva has helped countless businesses step into the future with its
        latest solution architecture technologies. Since our inception 5 years
        ago, Eteva has been at the forefront of digital engineering and
        innovation for many national and international clients. Our dedicated
        team of experts and developers is known for its highly customized
        architecture solutions crafted according to your specific business
        needs.
      </p>
      <Link to="/products">
        <button type="button" className="product-button">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
)

export default Home
