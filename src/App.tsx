import { Header } from './components/Header/Header';
import { Tabbar } from './components/Tabbar/Tabbar';
import { TaskInput } from './components/TaskInput/TaskInput';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <TaskInput />
        <Tabbar />
      </div>
    </div>
  );
}

export default App;
