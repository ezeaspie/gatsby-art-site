import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {  
    const post = data.markdownRemark;
    return (
    <Layout>
      <div className="container">        
          <Img className="blog-main-img" fluid={post.frontmatter.cover_image.childImageSharp.fluid} alt={post.frontmatter.title}/>        
          <div className="blog-main-div">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          <div  className="blog-main-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link to="/blog">Return to Blog Index</Link> 
          </div>      
       </div>    
    </Layout>
  )
}

export const query = graphql`  
query($slug: String!) {   
     markdownRemark(fields: { slug: { eq: $slug } }) {
               html
                     frontmatter { 
                                title 
                                date
                                cover_image {
                                  childImageSharp{
                                    fluid(maxWidth:1200){
                                      ...GatsbyImageSharpFluid, 
                                    }
                                  }
                                  publicURL
                                }
                                 }
                                    
                                }  
                              }`