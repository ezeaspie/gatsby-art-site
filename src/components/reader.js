import React, {Component} from 'react';
import { Link, withPrefix } from 'gatsby'


class Reader extends Component {
    constructor(props){
        super(props);
        this.state = {
            isComicDropdown:false,
            isChapterDropdown:false,
            isPageDropdown:false,
        }
    }

    render(){
        let chapterInfo = this.props.chapterInfo;
        let imageSource = `/comics/${chapterInfo.comicId}/${chapterInfo.chapterId}/${chapterInfo.currentPage}.png`;
        console.log(imageSource);
        //console.log(chapterInfo);

        let pageLinks = [];

        for(let i = 0 ; i<chapterInfo.chapterPages; i++){
            pageLinks.push(
            <Link to={`/heroine-rises/${chapterInfo.chapterId}/${i}`}>

            <li 
                key={`page${i}`}
                className={this.state.isPageDropdown?"list-open":"list-closed"}
                onMouseOver={()=>{this.setState({isPageDropdown: true})}}
                onMouseOut={()=>{this.setState({isPageDropdown:false})}}
            >
            <h5>{i+1}</h5>
            </li>
            </Link>); 
         }


        return (
            <div>
                <div className="reader-title-div">
                    <div className="chapter-list-div">
                        <h5 
                        onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                        onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
                        className="reader-chapter-title">{chapterInfo.chapterId+1}. {chapterInfo.chapterTitle}</h5>
                        <ul className={this.state.isChapterDropdown?"list-open collapse-list":"list-closed collapse-list"}>
                        {
                            chapterInfo.comicData.map((chapter)=>{
                                return <li 
                                onMouseOver={()=>{this.setState({isChapterDropdown: true})}}
                                onMouseOut={()=>{this.setState({isChapterDropdown:false})}}
                                key ={`chapter${chapter.chapter}`}
                                className={this.state.isChapterDropdown?"list-open":"list-closed"}
                                ><h5>{`${chapter.chapter+1}. ${chapter.title}`}</h5></li>
                            })
                        }
                        </ul>
                    </div>
                    
                    <div className="reader-list-div">
                        <h5 
                        className="reader-page-number"
                        onMouseOver={()=>{this.setState({isPageDropdown: true})}}
                        onMouseOut={()=>{this.setState({isPageDropdown:false})}}
                        >{chapterInfo.currentPage+1}</h5>
                        <ul className={this.state.isPageDropdown?"list-open collapse-list":"list-closed collapse-list"}>
                            {
                                pageLinks.map((page)=>{
                                    return page;
                                })
                            }
                        </ul>
                    </div>
                    <h5 className="reader-comic-title">{chapterInfo.comicName}</h5>
                </div>
                <div className="reader">
                    <Link to={`/heroine-rises/${chapterInfo.chapterId}/${chapterInfo.currentPage+1}`}>
                        <img alt="page of comic" src={withPrefix(imageSource)} style={{width:'100%', maxWidth:'920px'}}/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Reader;