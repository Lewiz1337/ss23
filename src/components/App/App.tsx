import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';
import { FilterForm } from '../FilerForm/FilterForm';
import { Layout } from '../Layout/Layout';
import { Main } from '../../pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
