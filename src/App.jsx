import './App.css';
import { Header } from './componets/Header';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Header />


    </div>
  );
}

export default App;
