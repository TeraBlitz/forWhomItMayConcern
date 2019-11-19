import React,{ Component} from 'react';
import PropTypes from 'prop-types';


class GradientBox extends Component {

  currentConfig=()=>{
    return{
      background: this.props.activeGradiation
      //background:"linear-gradient(#e66465, #9198e5)"
      //backgroundColor: this.props.color2
    }
  }

  render(){
  return (
    <div style={{display:"grid",gridTemplateRows: "25% 25% 25% 25% ",paddingLeft:"20px",paddingRight:"20px"}} className="center">
        <div></div>
        <div style={this.currentConfig()} className="divShowingGradient"></div>
        <div style={{display:"flex",alignItems:"center", justifyContent: "center"}}> <textarea disabled value={this.props.code}></textarea></div>
        <div></div>
    </div>
  );}
}


GradientBox.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  activeGradiation: PropTypes.string.isRequired,
  format: PropTypes.bool.isRequired,
  style: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired
}

export default GradientBox;
