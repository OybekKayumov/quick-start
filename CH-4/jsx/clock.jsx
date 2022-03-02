import AnalogDisplay from "../js/analog-display";
import DigitalDisplay from "../js/digital-display";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.LaunchClock()
    this.state = {currTime: (new Date()).toLocaleString()}
  }
  
  LaunchClock() {
    setInterval(() => {
      console.log('Updating...');
      this.setState({
        currTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
   
  
  render() {
    console.log('Rendering...');
    return (
      <div>
        <AnalogDisplay time={this.state.currTime}/>,
        <DigitalDisplay time={this.state.currTime}/>

      </div>

    )
  }
}

export default Clock