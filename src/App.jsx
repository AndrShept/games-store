import { Header } from './components/Header';
import { GameInfo } from './pages/GameInfo';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/app/:title' element={<GameInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
