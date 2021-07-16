import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <Seo title="Not Found" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
