import React,{ Component} from 'react';
import './App.css';

import GradientOptions from './components/GradientOptions'
import GradientBox from './components/GradientBox'

class App extends Component {
  state={
    color1:"#03f",
    color2:"#9fc0fd",
    activeGradiation:"linear-gradient(#03f, #9fc0fd)",
    gradOption:"",
    format:true,
    style:true,
    code:"linear-gradient(#03f, #9fc0fd)"
  }

  color1Change =(color) =>{
    this.setState({color1:color});
  }

  color2Change =(color) =>{
    this.setState({color2:color});
  }

  changeStyle =(style)=>{
    if(style==="linear"){
      this.setState({style:true});
    }
    if(style==="radial"){
      this.setState({style:false});
    }
  }

  changeFormat =(format)=>{
    if(format==="hex"){
      this.setState({format:true});
    }
    if(format==="rgb"){
      this.setState({format:false});
    }
  }

  //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  hexToRgb=(hex)=>{
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb("+parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16)+")";
    /*result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;*/
  }
  
//im very sorry i could not find a way to do two changes to setstate in a row 
//without happing updating problems so i had to make this UGLY workaround
  changeDir =(x)=>{
    console.log(this.state.style)
    if(this.state.format)
    {
      if(this.state.style)
      {
        if(x==="top"){    
          this.setState({
            activeGradiation:"linear-gradient("+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient("+this.state.color1+", "+this.state.color2+")"
          })
  
        }
        else if(x==="top right"){
          this.setState({
            activeGradiation:"linear-gradient(to left bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left bottom, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="right"){
          this.setState({
            activeGradiation:"linear-gradient(to left, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom right"){
          this.setState({
            activeGradiation:"linear-gradient(to left top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left top, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom"){
          this.setState({
            activeGradiation:"linear-gradient(to top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to top, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom left"){  
          this.setState({
            activeGradiation:"linear-gradient(to right top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right top, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="left"){
          this.setState({
            activeGradiation:"linear-gradient(to right, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="top left"){
          this.setState({
            activeGradiation:"linear-gradient(to right bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right bottom, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        //console.log(this.state.activeGradiation)
      }
      else{
        if(x==="top"){    
          this.setState({
            activeGradiation:"-webkit-radial-gradient(center top,"+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(center top,"+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="top right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right top, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right top, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right center, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right center, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right bottom, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(center bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(center bottom, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="bottom left"){  
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left bottom, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="left"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left center, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left center, "+this.state.color1+", "+this.state.color2+")"
          })
        }
        else if(x==="top left"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left top, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left top, "+this.state.color1+", "+this.state.color2+")"
          })
        }
      }
    }
    else{
      if(this.state.style)
      {
        if(x==="top"){    
          this.setState({
            activeGradiation:"linear-gradient("+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient("+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
  
        }
        else if(x==="top right"){
          this.setState({
            activeGradiation:"linear-gradient(to left bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left bottom, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="right"){
          this.setState({
            activeGradiation:"linear-gradient(to left, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom right"){
          this.setState({
            activeGradiation:"linear-gradient(to left top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to left top, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom"){
          this.setState({
            activeGradiation:"linear-gradient(to top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to top, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom left"){  
          this.setState({
            activeGradiation:"linear-gradient(to right top, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right top, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="left"){
          this.setState({
            activeGradiation:"linear-gradient(to right, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="top left"){
          this.setState({
            activeGradiation:"linear-gradient(to right bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"linear-gradient(to right bottom, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        //console.log(this.state.activeGradiation)
      }
      else{
        if(x==="top"){    
          this.setState({
            activeGradiation:"-webkit-radial-gradient(center top,"+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(center top,"+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="top right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right top, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right top, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right center, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right center, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom right"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(right bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(right bottom, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(center bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(center bottom, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="bottom left"){  
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left bottom, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left bottom, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="left"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left center, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left center, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
        else if(x==="top left"){
          this.setState({
            activeGradiation:"-webkit-radial-gradient(left top, "+this.state.color1+", "+this.state.color2+")",
            code:"-webkit-radial-gradient(left top, "+this.hexToRgb(this.state.color1)+", "+this.hexToRgb(this.state.color2)+")"
          })
        }
      }
    }
    
    //console.log(this.hexToRgb(this.state.color1))
    
  }

  render(){
  return (
    <div className="App" style={{display:"grid",gridTemplateColumns: "50% 50%",position: "absolute", top: 0, right: 0, bottom: 0, left: 0}}>
      <GradientOptions 
        color1={this.state.color1} color2={this.state.color2}
        activeGradiation={this.state.activeGradiation} format={this.state.format} 
        style={this.state.style}
        color1Change={this.color1Change} color2Change={this.color2Change}
        changeDir={this.changeDir}
        changeStyle={this.changeStyle}
        changeFormat={this.changeFormat}
      />
      <GradientBox 
        color1={this.state.color1} color2={this.state.color2} 
        activeGradiation={this.state.activeGradiation} 
        format={this.state.format} style={this.state.style}
        code={this.state.code}
      />
      </div>
  );}
}

export default App;
