import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'
import Banner from '../components/Banner';
import Img from 'gatsby-image';
import comicData from '../data/comicData';
import InstagramFeed from '../components/InstagramFeed';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <InstagramFeed data={data.allInstaNode}/>
    <div className="container">
    <h4 className="main-header">Recent Blog Posts</h4>
    <div className="blog-preview-list">
      {
        data.allMarkdownRemark.edges.map(({ node })=>{
          return(
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

          )
        })
      }
    </div>
    <h4 className="main-header">Comics</h4>
    <div className="comic-index">
    {
      comicData.map((comic)=>{
        return(
          <Link className="comic-index-preview" to={comic.url} key={comic.title}>
            <div className="comic-index-preview-image" style={{backgroundImage:`url(${comic.image})`}}></div>
            <h4>{comic.title}</h4>
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
    allInstaNode(limit:10){
      edges{
        node{
          id
          likes
          preview
          timestamp      
          localFile {
            childImageSharp{
              fluid(maxWidth:200){
                ...GatsbyImageSharpFluid, 
              }
          }
        }
        }
      }
    }
  }
`
