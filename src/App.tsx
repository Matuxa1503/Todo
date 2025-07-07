import { Header } from './components/Header/Header';
import './App.scss';
import { Tabbar } from './components/Tabbar/Tabbar';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Tabbar />
      </div>
    </div>
  );
}

export default App;
