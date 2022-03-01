// здесь создаются три элемента, и они вложены,
// в коде используется компонент из React Router. 
// Насколько хорошо читалсяэтот код по сравнению со стандартной разметкой HTML?  читать и вводить целую кучу команд React.createElement() совершенно неинтересно.
// Решением этой проблемы стал язык JSX

//! 
// render() {
//   return React.createElement(
//     'div',
//     { style: this.styles },
//     React.createElement(
//       'p',
//       null,
//       React.createElement(
//         reactRouter.Link,
//           { to: this.props.returnTo },
//           'Back'
//       )
//     ),
//     this.props.children
//   );
// }

// JSX — расширение JavaScript, предоставляющее синтаксический сахар для вызовов функций и построения объектов, особенно React.createElement(). 
// На первый взгляд код JSX может показаться чем-то вроде шаблонизатора или HTML, но это не так. JSX строит элементы React, позволяя вам пользоваться всей мощью JavaScript.
// JSX — отличный инструмент для записи компонентов React. Его основные преимущества:
//  Улучшенное восприятие со стороны разработчика (DX, Developer Experience) —
// код проще читается из-за его выразительности, обусловленной XML-подобным
// синтаксисом, лучше подходящим для представления вложенных декларативных структур.
//  Повышение эффективности работы команд — неопытным разработчикам (например, веб-дизайнерам) проще изменять этот код, потому что JSX напоминает разметку HTML, которая им уже знакома.
//  Снижение нагрузки на пальцы и количества синтаксических ошибок — разработчикам приходится набирать меньше кода, а это означает, что они сделают
// меньше ошибок и им придется выполнять меньше монотонной работы.


// this code 
<div>
  <HelloWorld />
  <br/>
  <a href="http://webapplog.com">Great JS Recources</a>
</div>

// same as this:

React.createElement(
  'div',
  null,
  React.createElement(HelloWorld, null),
  React.createElement("br", null),
  React.createElement(
    "a",
    { href="http://webapplog.com" },
    "Great JS Recources"
    )
)

// если вы воспользуетесь Babel, код JS принимает следующий вид:

'use srict';

React.createElement(
  'div',
  null,
  " ",
  React.createElement(HelloWorld, null),
  " ",
  React.createElement("br", null),
  " ",
  React.createElement(
    "a",
    { href="http://webapplog.com" },
    "Great JS Recources"  
  ),
  " "
);

// Фактически JSX представляет собой мини-язык с XML-подобным синтаксисом;
// однако этот язык изменил подход к написанию UI-компонентов.
// Ранее разработчики писали разметку HTML — и код JS для контроллеров и представлений — в MVCподобном стиле, переключаясь между файлами. Такой подход был обусловлен разделением обязанностей на ранней стадии развития технологий. Он хорошо работал, пока веб-страницы состояли из статической разметки HTML, небольшого количества CSS и фрагмента JS