import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'
import Img from 'gatsby-image';

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" keywords={[`art`, `tutorials`, `drawing`]} />
    <div className="container">
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
            <div className="blog-preview">
              <Img className="blog-preview-image" fluid={node.frontmatter.cover_image.childImageSharp.fluid} alt={node.frontmatter.title}/>        
              <div className="blog-preview-content">
                <h5>{node.frontmatter.title}</h5>
                <h6>{node.frontmatter.date}</h6>
                <p>{node.excerpt}</p>
              </div>            
            </div>
            </Link>
        ))}
    </div>
    
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark (sort:{order:DESC, fields: [frontmatter___date]}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              childImageSharp{
                fluid(maxWidth:300){
                  ...GatsbyImageSharpFluid, 
                }
              }
            }
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
