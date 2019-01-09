import React from 'react'
import Layout from '../components/layout'
import { withPrefix } from 'gatsby'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <img alt="comic-cover" src={withPrefix('/comics/HeroineRises/00/HR_1_01.png')}/>
    <Link to="/blog/">Go to page blog</Link>
  </Layout>
)

export default IndexPage

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
