import React, {Component} from 'react'
import { Link } from "gatsby"
import heroineRisesImage from '../images/gallery/Harbour Cover 2.jpg';

class HeroineRises extends Component{

  render(){
    let comicInfo = this.props.comicInfo.comicData;

    let latestChapter = comicInfo[comicInfo.length-1];

    return(
      <div className="container">
      <div className="heroine-rises">
      <div className="comic-overview">
        <h2 className="comic-title" style={{fontFamily:'Lobster,cursive', fontSize:'2.5em',margin:'.5em',fontWeight:'normal'}}><i>Heroine Rises</i></h2>
        <div className="comic-info">
            <div className="comic-synopsis">
                <p><i>Heroine Rises</i> follows the story of Madeline Harbour, a small-time detective known for solving mysteries about runaway cats, stolen answer sheets, and misplaced library books. However, her dreams of becoming a 'heroine' in the city of Northern Serenity won't be achieved by beating petty criminals. Madeline knows she must move on - she needs to take on the city's 'actual' criminals to further her pursuit of the greater good.</p>
                <p>Grappling with her own self-doubt and her mother’s over-protective nature, Madeline and her friends take on bigger cases, hoping that solving them will propel them to that coveted 'heroic' status. However, Madeline's quest forces her to take on the city's dark side. Rampant corruption within the government and police department, the unspoken and shady history of their city, powerful crime hierarchies, mysterious and magical artifacts, and shadowy figures that seem to be trying to foil Madeline’s investigations at every turn soon make the amateur detective understand why Serenity has no heroes.</p>
            </div>
            <img src={heroineRisesImage} alt="cover" className="comic-cover"/>
        </div>
      </div>

      <div className="current-chapter">
        <h5>Latest Chapter:</h5>
        <Link to={`/heroine-rises/${latestChapter.chapter}/0`}>{latestChapter.chapter + 1}. {latestChapter.title}</Link>
      </div>

      <div className="chapter-list-div">
      <h5>Chapters</h5>
        <ul className="comic-chapter-list">
          {
            comicInfo.map((chapter)=>{
              return (
                <Link to = {`heroine-rises/${chapter.chapter}/0`}>
                <li>{chapter.chapter+1}. {chapter.title}</li>
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