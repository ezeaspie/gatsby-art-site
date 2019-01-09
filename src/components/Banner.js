import React, {Component} from 'react';
import { Link } from "gatsby"

import GalleryPreview from '../images/gallery/The Young Woman and the Sea.jpg';

class Banner extends Component {

    constructor(props){
        super(props);
        this.state = {
            bannerState:0,
            maxBannerState:3,
            title:null,
            description:null,
            image:null,
            link:null,
        }
    }

    componentDidMount(){
        this.getBannerStateVariables();
    }

    getBannerStateVariables(){
        console.log(this.state.bannerState)
        let bannerInfo = [
            {
                title:"GALLERY",
                description:"View all of my artistic creations - ranging from early pencil sketches to maps and concept art for characters and settings!",
                image:GalleryPreview,
                link:`/Gallery`,
            },
            {
                title:"Heroine Rises 1 : Small Time Detective",
                description:"Read the latest pages of my Heroine Rises series!",
                image:GalleryPreview,
                link:`/Gallery`,
            },
            {
                title:"BLOG",
                description:"Read tutorials and other musings I may have about art!",
                image:GalleryPreview,
                link:`/Gallery`,
            }
        ]
        let selectedObject = bannerInfo[this.state.bannerState];
        this.setState({title:selectedObject.title,description:selectedObject.description,image:selectedObject.image,link:selectedObject.link});
    }

    handleBannerUpdateRequest(upOrDown){
        if(upOrDown){
            if(this.state.bannerState +1 >= this.state.maxBannerState){
                this.setState({bannerState:0},this.getBannerStateVariables);
            }
            else{
                console.log(this.state.bannerState+1);
                this.setState({bannerState:this.state.bannerState+1},this.getBannerStateVariables);
            }
        }
        else{
            if(this.state.bannerState -1 < 0){
                this.setState({bannerState:this.state.maxBannerState-1},this.getBannerStateVariables);
            }
            else{
                this.setState({bannerState:this.state.bannerState-1},this.getBannerStateVariables);
            }
        }
    }

    render(){

        return(
            <div className="banner">
                <img src={this.state.image} alt="gallery-preview"></img>
                <div className="back" onClick={()=>{this.handleBannerUpdateRequest(false)}}>(</div>
                <Link to={this.state.link}>
                <div className="banner-description">
                    <h2 className="banner-title">{this.state.title}</h2>
                    <h3 className="banner-desc">{this.state.description}</h3>
                </div>
                </Link>
                <div className="forward" onClick={()=>{this.handleBannerUpdateRequest(true)}}>)</div>
            </div>
        ) 
    }
}

export default Banner;