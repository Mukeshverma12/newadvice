import React from "react"
import './App.css';
import axios from 'axios'
import Button from '@material-ui/core/Button'
class App extends React.Component{
  state = {
    advice:''
  }
  componentDidMount() {
  this.fecthAdvice();
  }
  fecthAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
          const { advice }= response.data.slip;
          console.log(advice)
          this.setState({advice})
        })
        .catch((e) => {console.log(e)
        });
  }

  render(){
      const {advice}=this.state;
    return <>
      <div className="App">
          <div className="card">
              <div className="heading">{advice}</div>
              <Button onClick={this.fecthAdvice()}  color="primary">
                 <span> take your advice</span>
              </Button>
          </div>
      </div>
    </>
  }
}

export default App;
