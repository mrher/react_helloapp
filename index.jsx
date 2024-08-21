const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <h1>Hello React</h1>  // элемент, который мы хотим создать
);
const elem = ReactDOM.createRoot(document.getElementById("header"));
function tick() {
    elem
    .render(
      <div>
        <h1>Сервис получения времени</h1>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  setInterval(tick, 1000);

ReactDOM.createRoot(document.getElementById("container"))
    .render(
    <div>
        <h2>Начальное время {new Date().toLocaleTimeString()}.</h2>
      </div>
);