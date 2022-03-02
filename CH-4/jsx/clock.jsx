
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.LaunchClock()
    this.state = {currTime: (new Date()).toLocaleString()}
  }
  
  LaunchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
   
  
  render() {
    console.log('rendering Clock...');
    return (
      <div>{this.state.currTime}</div>
    )
  }
}

export default Clock