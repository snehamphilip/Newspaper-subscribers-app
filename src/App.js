import logo from './logo.svg';
import './App.css';
import AddPage from './components/AddPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddPage/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
