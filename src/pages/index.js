import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'
import Banner from '../components/Banner';
import Img from 'gatsby-image';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <div className="container">
    <h4>Recent Blog Posts</h4>
    <div className="blog-preview-list">
      {
        data.allMarkdownRemark.edges.map(({ node })=>{
          return(
            <Link to={node.fields.slug} key={node.id}>
            <div className="blog-preview">
              <Img className="blog-preview-image" fluid={node.frontmatter.cover_image.childImageSharp.fluid} alt={node.frontmatter.title}/>        
              <div className="blog-preview-content">
                <h5>{node.frontmatter.title}</h5>
                <p>{node.excerpt}</p>
              </div>            
            </div>
            </Link>

          )
        })
      }
    </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort:{order:DESC, fields: [frontmatter___date]}
      limit:5
    ){
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
