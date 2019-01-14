const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var fs = require('fs');

let comicData = [];

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

fs.readFile(`./src/pages/data/comicData.json`, 'utf8', function (err, data) {
    if (err) throw err;
    comicData = JSON.parse(data);
    console.log(comicData);
    
    exports.createPages = ({ graphql, actions }) => {
      const { createPage } = actions  
      return graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => { 
          console.log('created page for blog post');     
            createPage({       
                 path: node.fields.slug,        
                 component: path.resolve(`./src/templates/blog-post.js`),        
                 context: {          
                     // Data passed to context is available 
                              // in page queries as GraphQL variables.          
                              slug: node.fields.slug,        
                  },      
            }) 
            let harbourComicFiltered = comicData.filter((dataObj)=>{
              return dataObj.comicId === 0;
            })

            let oneShotsFiltered = comicData.filter((dataObj)=>{
              return dataObj.comicId === 2;
            })

            createPage({
              path: `heroine-rises`,
              component:path.resolve(`./src/templates/comic-overview.js`),
              context:{
                comicData: harbourComicFiltered,
                comicId:0,
                comicTitle:"Heroine Rises"
              }
            })
            createPage({
              path:'one-shots',
              component:path.resolve(`./src/templates/comic-overview.js`),
              context:{
                comicData:oneShotsFiltered,
                comicId:2,
                comicTitle:"One Shots"
              }
            })
            const template = path.resolve(`./src/templates/comic-page.js`);

      // Create pages for each COMIC entry.
      comicData.forEach(( chapter ) => {
        const comicNames = [
          "Heroine Rises",
          "SweetWater",
          "One Shots"
        ]

        const comicNameURL = [
          "heroine-rises",
          "sweetwater",
          "one-shots"
        ]

        let chapterTitle = chapter.title;
        let comicId = comicNameURL[chapter.comicId];
        let chapterId = chapter.chapter;
        let chapterPages = chapter.pages;
        let comicName = comicNames[chapter.comicId];
        let comicSeriesID = chapter.comicId;

        let filteredData = comicData.filter((dataObj) => {
          return dataObj.comicId === comicSeriesID;
        });

        if(filteredData.length > 20){
          filteredData = filteredData.slice(-20);
        }

        filteredData.reverse();

        for (let i = 0 ; i<chapterPages ; i++){
          let pathName = `${comicId}/${chapterId}/${i}`
          let currentPage = i;
          console.log(pathName);
          createPage({
            path:pathName,
            component: template,
  
            // Send additional data to page from JSON (or query inside template)
            context: {
              comicData:filteredData,
              slug:pathName,
              chapterTitle,
              comicName,
              chapterPages,
              chapterId,
              currentPage,
              comicId: comicSeriesID,
            }
          });
        }
        
        });   
        })  
      })
    }
});

