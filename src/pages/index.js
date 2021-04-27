import * as React from "react"
import Header from "../components/Header"
import "../styles/skeleton.css"
import "../styles/custom.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  paddingTop: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  textAlign: "center",
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginBottom: 30,
  listStyle: 'none'
}

const linkStyle = {
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const links = [
  {
    text: "open source projects",
    url: "/404",
  },
  {
    text: "tech blogposts",
    url: "/404",
  },
  {
    text: "photography",
    url: "/404",
  },
  {
    text: "digital art",
    url: "/404",
  },
  {
    text: "music",
    url: "/404",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
