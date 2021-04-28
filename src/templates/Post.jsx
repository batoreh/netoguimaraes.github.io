import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import "../styles/skeleton.css"
import "../styles/custom.css"

export const PostTemplate = ({ htmlContent, title, date, slug }) => {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <small><p className="date">{date}</p></small>
        <a href={`/${slug}`}><h3 className="title">{title}</h3></a>
        {
          htmlContent && <div
            className="post"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        }
      </div>
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter: { date, title, slug }, html } = markdownRemark
  return (
    <>
      <Header />
      <PostTemplate
        title={title}
        date={date}
        slug={slug}
        htmlContent={html}
      />
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