import React, {Component} from 'react'
import { Link, withPrefix } from "gatsby"
import comicData from '../pages/data/comicData';

class HeroineRises extends Component{

  render(){
    let comicInfo = this.props.comicInfo.comicData;
    let comicMeta = comicData[this.props.comicInfo.comicId];



    let latestChapter = comicInfo[comicInfo.length-1];

    return(
      <div className="container">
      <div className="heroine-rises">
      <div className="comic-overview">
        <h2 className="comic-title" style={{fontFamily:'Lobster,cursive', fontSize:'2.5em',margin:'.5em',fontWeight:'normal'}}><i>{comicMeta.title}</i></h2>
        <div className="comic-info">
            <div className="comic-synopsis">
            {comicMeta.synopsis}
                </div>
            <img src={comicMeta.coverImage} alt="cover" className="comic-cover"/>
        </div>
      </div>

      <div className="current-chapter">
        <h5>Latest Chapter:</h5>
        <Link to={`/${comicMeta.url}/${latestChapter.chapter}/0`}>{latestChapter.chapter + 1}. {latestChapter.title}</Link>
      </div>

      <div className="chapter-list-div">
      <h5>Chapters</h5>
        <ul className="comic-chapter-list" id={comicMeta.showImages?"":"comic-title-only"}>
          {
            comicInfo.map((chapter)=>{
              let imageSource = `/comics/${comicMeta.id}/${chapter.chapter}/0.jpg`;

              return (
                <Link to = {`${comicMeta.url}/${chapter.chapter}/0`} key={chapter.chapter}>
                {
                  comicMeta.showImages?
                  <div className="blog-preview comic-preview">
                  <div className="comic-preview-image" style={{backgroundImage:`url(${withPrefix(imageSource)})`}} alt={chapter.title}/>        
                  <div className="blog-preview-content">
                    <h5>{chapter.title}</h5>
                  </div>  
                  </div>
                  :
                  <li>{chapter.chapter+1}. {chapter.title}</li>

                }
                </Link>
              )
            })
          }
        </ul>
      </div>
  </div>
      </div>
    )
  }
}


export default HeroineRises