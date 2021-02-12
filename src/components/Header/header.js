import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header
  >
    <div className={styles.header}>
      <h1>
          {siteTitle}
      </h1>
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