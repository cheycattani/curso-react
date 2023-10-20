import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <h1>Seção 3 - Avançando em React</h1>
      {/*Imagem em public - não precisa ser importada*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em pastas dentro do src - precisa ser importada*/}
      <div>
        <img src={City} alt="" />
      </div>

      <ManageData />
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
