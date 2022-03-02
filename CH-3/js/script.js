// Class Component
class Content extends React.Component {
  getUrl() {
    return 'http://reactjs.org';
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Your REST API URL is: ',
        React.createElement(
          'a',
          { href: this.getUrl() },
          this.getUrl()
        )
      )
    );      
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
