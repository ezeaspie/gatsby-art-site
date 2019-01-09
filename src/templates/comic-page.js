import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Reader from '../components/reader';

export default ( data ) => {  
    let chapterInfo = data.pageContext; 
    return (
    <Layout>
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