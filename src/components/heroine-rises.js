import React, {Component} from 'react'
import { Link, withPrefix } from "gatsby"
import heroineRisesImage from '../images/gallery/Harbour Cover 2.jpg';
import SweetWaterImage from '../images/site/sw.png';

class HeroineRises extends Component{

  render(){
    let comicData = [
      {
        title:"Heroine Rises",
        id:0,
        url:"heroine-rises",
        image: heroineRisesImage,
        showImages:false,
        synopsis:
        <div>
          <p><i>Heroine Rises</i> follows the story of Madeline Harbour, a small-time detective known for solving mysteries about runaway cats, stolen answer sheets, and misplaced library books. However, her dreams of becoming a 'heroine' in the city of Northern Serenity won't be achieved by beating petty criminals. Madeline knows she must move on - she needs to take on the city's 'actual' criminals to further her pursuit of the greater good.</p>
          <p>Grappling with her own self-doubt and her mother’s over-protective nature, Madeline and her friends take on bigger cases, hoping that solving them will propel them to that coveted 'heroic' status. However, Madeline's quest forces her to take on the city's dark side. Rampant corruption within the government and police department, the unspoken and shady history of their city, powerful crime hierarchies, mysterious and magical artifacts, and shadowy figures that seem to be trying to foil Madeline’s investigations at every turn soon make the amateur detective understand why Serenity has no heroes.</p>
        </div>
      },
      {
        title:"",
        url:"",
        image:"",
      },
      {
        title:"One Shots",
        id:2,
        url:"one-shots",
        image: SweetWaterImage,
        showImages:true,
        synopsis: 
        <div>
          <p>Every once in a while I make a comic that has nothing to do with any other series or places characters from other series in non-canon context. Or I just make some for fun or practice. Either way, those comics end up here: regular non-serialized standalone comics.</p>
        </div>
      }
    ]
    let comicInfo = this.props.comicInfo.comicData;
    let comicMeta = comicData[this.props.comicInfo.comicId];
    console.log(comicInfo,comicMeta.title);



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
            <img src={comicMeta.image} alt="cover" className="comic-cover"/>
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
                <Link to = {`${comicMeta.url}/${chapter.chapter}/0`}>
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