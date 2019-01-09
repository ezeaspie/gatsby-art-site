import React, {Component} from 'react'

class GalleryObject extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDesc : false,
    }
  }
  render(){
    let content = null;
    let data = this.props.data;
    let hasData = false;

    if(hasData !== undefined){
      hasData = true;
    }

    if(hasData){
      content =
        <div className="gallery-item-tag"
         onMouseOver={()=>{this.setState({showDesc:true})}}
         onMouseOut={()=>{this.setState({showDesc:false})}}
         >
          <p className="gallery-item-tag-title"><b><i>{data.title}</i></b>, {data.date[1]}</p>
          <p className="gallery-item-tag-medium">{data.medium}</p>
        </div>
    }
    return(
      <div className="gallery-item">
        <img className="gallery-image" src={this.props.source} alt={content === null ?null:data.description}></img>
        {content}
      </div>
    )
  }
}
export default GalleryObject;