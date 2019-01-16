import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Reader from '../components/reader';
import comicData from '../data/comicData';
import SEO from '../components/seo';

export default ( data ) => {  
    let chapterInfo = data.pageContext; 
    let comicName = comicData[chapterInfo.comicId].title;
    return (
    <Layout>
        <SEO title={`Page ${chapterInfo.currentPage+1} | ${comicName} | Chapter ${chapterInfo.chapterId+1}`} keywords={[`Chapter ${chapterInfo.chapterId+1}`, `${comicName}`, `${chapterInfo.chapterTitle}`]} />
        <Reader chapterInfo={chapterInfo}/>
        
    </Layout>
  )
}

export const query = graphql`  
query($slug:String!){
allSitePage(filter:{context:{slug:{eq:$slug}}}){
    edges{
        node{
            context {
                slug
                chapterTitle
                comicName
                chapterPages
                chapterId
                }
            }
        }  
    }
}`