import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <div className="main-head">
      <Link to="/">
          <h1>{siteTitle}</h1>
          <p>a creative archive</p>
        </Link>
      </div> 
      <nav>
        <ul>
        <Link to="/Gallery"><li>Gallery</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/heroine-rises"><li><i>Heroine Rises</i></li></Link>
        <Link to="about"><li>About</li></Link>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
