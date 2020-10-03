import React from "react"
import Layout from "../components/layout"
import profile from '../images/andrei.png'

export default function About() {
  return (
    <Layout>
      <h1>About Andrei</h1>
      <img src={profile} alt="me" />
      <p>
        I’m good enough, I’m smart enough, people like me!
      </p>
    </Layout>
  )
}