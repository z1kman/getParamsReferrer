import "./App.css";

function App() {
  const getData = () => {
    console.log(document.location)
    const navigatorObject = window.navigator
    let data = "";
    for (let key in navigatorObject) {
      data += `${JSON.stringify(key)}: ${JSON.stringify(navigatorObject[key])},`;
    }
    return data
  };
  const data = getData();
  return (
    <div className="App">
      document.referrer = {document.referrer}
      <br />
      <br />
      <a href={document.referrer + 'calculator?status=cool'}>Вернуться назад со статусом - все круто</a>
      <br />
      <a href={document.referrer + 'calculator?status=sad'}>Вернуться назад со статусом - все грустно</a>
      <br />
      <br />
      window.navigator:
      <br />
      {data}
      
    </div>
  );
}

export default App;
