import './App.css';
import Footer from './components/Footer/Footer';
import AppRouter from './config/router';
import Home from './pages/Home';

function App() {
  return (
    <>
      <AppRouter />
      <Footer/>
    </>
  );
}

export default App;
