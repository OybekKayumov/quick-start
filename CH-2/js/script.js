// свойства неизменяемые в пределах своих компонентов
// и позволяют модифицировать элементы
// можено изменить URL-адрес ссылки, передав новое значение
// свойства:
// React.createElement('a', {href: 'https://reactjs.org/'})

// свойство PROPERTY_NAME со значением VALUE может передаваться следующим образом:

{/* <TAG_NAME PROPERTY_NAME=VALUE/> */}

// Возможные варианты использования свойств:
//  Для генерирования стандартных атрибутов HTML элемента: href, title, style,
// class и т. д.
//  В коде JavaScript класса компонента React при использовании значений this.
// props, например this.props.PROPERTY_NAME (где PROPERTY_NAME — произвольное
// имя)

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'li',
      this.props,
      this.props.id + ': ' + 'Hello ' + this.props.frameworkName + ' world!!! ' + this.props.title      
    )
  }
}

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
      id: 'ember', 
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web applications.'
    }),
    React.createElement(HelloWorld, {
      id: 'backbone',
      frameworkName: 'Backbone.js',
      title: 'Backbone.js gives structure to web applications...'
    }),
    React.createElement(HelloWorld, {
      id: 'angular',
      frameworkName: 'Angular.js',
      title: 'Superheroic JavaScript MVW Framework.'
    })
  ),
  document.getElementById('content')
)

// 3((CO5-3))