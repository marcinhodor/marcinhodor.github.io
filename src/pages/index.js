import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const Home = () => {
  return (
    <div style={{ color: `purple` }}>
      <Header />
      <Link to="/learn/">Learn ML</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
    </div>
  )
}
export default Home
