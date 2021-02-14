import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header/header"

import "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div >
      <Header siteTitle="Weather-App" />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
