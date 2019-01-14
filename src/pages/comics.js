import React, {Component} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import comicData from '../pages/data/comicData';

class Comics extends Component {
  render(){
        return(
      <Layout>
          
        <SEO title="Comics" />
        <div className="container">
        <div className="comic-list">
          {comicData.map((comic)=>{
              return (
                <div className="comic-overview-main">
                    <div style={{backgroundImage:`url(${comic.image})`}} className="comic-overview-cover"/>
                    <div className="comic-overview-content">
                        <h2 style={{fontFamily:'Lobster,cursive', fontSize:'2.5em',margin:'.5em',fontWeight:'normal'}}><i>{comic.title}</i></h2>
                        <div className="comic-overview-excerpt">
                        {comic.excerpt}
                        </div>
                        <Link to={comic.url}><h4>Read Now!</h4></Link>
                    </div>
                </div>
              )
          })}
        </div>
        </div>
    </Layout>
    )
  }
}
export default Comics;