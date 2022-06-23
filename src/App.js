import "./App.css";

function App() {
  const getData = () => {
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
      window.navigator:
      <br />
      {data}
    </div>
  );
}

export default App;
