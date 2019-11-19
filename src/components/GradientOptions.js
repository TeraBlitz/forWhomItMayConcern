import React,{Component} from 'react';
import PropTypes from 'prop-types';

  class GradientOptions extends Component {
    divStyle1=()=>{
      return{
        backgroundColor: this.props.color1      
      }
    }
    divStyle2=()=>{
      return{
        backgroundColor: this.props.color2   
      }
    }

    render(){
      return (
        <div className="center">
          <div></div>
          <div> 
            <div className="divide">
              <h1>Style:</h1>
              <button onClick={()=>this.props.changeStyle("linear")}>Linear</button><button onClick={()=>this.props.changeStyle("radial")}>Radial</button>
            </div>
            <div className="divide">
              <h1>Direction:</h1>
              <button onClick={()=>this.props.changeDir("top")}>Top</button><button onClick={()=>this.props.changeDir("top right")}>Top right</button>
              <button onClick={()=>this.props.changeDir("right")}>Right</button><button onClick={()=>this.props.changeDir("bottom right")}>Bottom right</button>
              <button onClick={()=>this.props.changeDir("bottom")}>Bottom</button><button onClick={()=>this.props.changeDir("bottom left")}>Bottom left</button>
              <button onClick={()=>this.props.changeDir("left")}>Left</button><button onClick={()=>this.props.changeDir("top left")}>Top left</button>
            </div>
            <div className="divide">
              <h1>Colors:</h1>
              <div style={{display: "flex"}}>
                <div className="clrButton" style={this.divStyle1()}></div><input style={{width:"30%",marginLeft:"5px"}} onChange={e=>{this.props.color1Change(e.target.value)}}/>
              </div>
              <div style={{display: "flex"}}>
                <div className="clrButton" style={this.divStyle2()}></div><input style={{width:"30%",marginLeft:"5px"}} onChange={e=>{this.props.color2Change(e.target.value)}}/>
              </div>
            </div>
            <div>
              <h1>Color format:</h1>
              <button onClick={()=>this.props.changeFormat("hex")}>Hex</button>
              <button onClick={()=>this.props.changeFormat("rgb")}>Rgb</button>
            </div>
          </div>
        <div></div>

        </div>
  );}
}

GradientOptions.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  activeGradiation: PropTypes.string.isRequired,
  format: PropTypes.bool.isRequired,
  style: PropTypes.bool.isRequired
}

export default GradientOptions;
