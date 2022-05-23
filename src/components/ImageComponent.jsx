import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return(
    <>
    <p>this is a BabyYoda</p>
    <img src={this.props.url} alt="" style={{ objectFit : "cover", borderRadius : '50%', width : '50%' }}/>
    </>
    );
    }
}
export default ImageComponent;