import React from "react"
import Layout from "../components/layout"
import HeroineRises from "../components/heroine-rises";
import SEO from '../components/seo'

export default ( data ) => {  
    let comicInfo = data.pageContext; 
    return (
    <Layout>
        <SEO title={comicInfo.comicTitle} keywords={[`Heroine`, `Rises`, `comic`]} />
        <HeroineRises comicInfo={comicInfo}/>
    </Layout>
  )
}