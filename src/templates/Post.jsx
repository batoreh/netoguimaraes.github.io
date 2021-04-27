import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import "../styles/skeleton.css"
import "../styles/custom.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="title">{frontmatter.title}</h1>
          <p className="date">{frontmatter.date}</p>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`