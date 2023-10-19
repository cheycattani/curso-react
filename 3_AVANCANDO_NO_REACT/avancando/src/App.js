import './App.css';

import City from './assets/city.jpg';

function App() {
  return (
    <div className="App">
     <h1>Seção 3 - Avançando em React</h1>
     {/*Imagem em public*/}
     <div>
      <img src="/img1.jpg" alt="Paisagem" />
     </div>

     {/*Imagem em pastas dentro do src*/}
     <div>
      <img src={City} alt="" />
     </div>
    </div>
  );
}

export default App;
