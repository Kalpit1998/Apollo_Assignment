// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { ParkinForm } from './components/ParkinForm';
import { Header } from './components/Header';
import { Parkoutform } from './components/ParkoutForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/parkin"} element={<ParkinForm />} />
        <Route path={"/parkout"} element={<Parkoutform />} />
        <Route path={"*"} element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
