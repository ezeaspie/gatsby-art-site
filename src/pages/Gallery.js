import React, {Component} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import artList from '../data/artData';
import GalleryObject from '../components/GalleryObject';


class Gallery extends Component {
  render(){
    let data = this.props.data;
    let artGallery = [];

    data.allFile.edges.map(({ node }) => {

      let isGif = false;
      if(node.extension === "gif"){
        isGif =true;
      }

      let artData = artList.filter((dataObject)=>{
        return dataObject.imgsrc === node.name;
      });

      let artdata = artData[0];
      let object = <GalleryObject 
        data = {artdata}
        key={node.id}
        source={isGif?node.publicURL:node.childImageSharp.fluid}
        isGif={isGif}
        />
        if(artdata.featured){
          artGallery.unshift(object);
        }
        else{
          artGallery.push(object);
        }
      return true;
    })

    return(
      <Layout>
        <SEO title="Gallery" />
        <div className="gallery">
          {artGallery.map((object)=>{
            return object;
          })}
        </div>
    </Layout>
    )
  }
}
export default Gallery;

export const query = graphql`
query{
  allFile(filter: { sourceInstanceName: { eq: "images-gallery" } }) {
    edges {
      node {
        extension
        dir
        modifiedTime
        name
        relativePath
        publicURL
        id
        childImageSharp{
          fluid(maxWidth:800){
            ...GatsbyImageSharpFluid, 
          }
        }
      }
    }
  }
}`
