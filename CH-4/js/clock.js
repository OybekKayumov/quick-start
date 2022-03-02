import AnalogDisplay from "/CH-4/js/analog-display.js";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating...');
      this.setState({ currentTime: new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime })
      );
    }
  }
  
  export default Clock
  
  // React.createElement(DigitalDisplay, { time: this.state.currentTime })