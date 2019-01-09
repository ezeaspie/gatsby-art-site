import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" keywords={[`art`, `tutorials`, `drawing`]} />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link 
           to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
                — {node.frontmatter.date}
            </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
    <Link to="/Gallery/">Go to page 2</Link>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
