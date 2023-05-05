import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Routing } from '../Router/Routing';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
