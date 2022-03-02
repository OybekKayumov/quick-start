const DigitalDisplay = function (props) {

  let hourStyle = {
    margin: -20,
    border: '1px solid grey',
    width: '60%',
    height: 30,
    backgroundColor: 'orange'
  };

  return React.createElement (
    'div',
    null,
    props.time,
    React.createElement('div', { style: hourStyle }),
  )  
}

export default DigitalDisplay