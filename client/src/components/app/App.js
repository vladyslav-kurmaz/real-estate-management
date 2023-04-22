import Header from '../header/header';
import MainPage from '../../pages/MainPage';
import Footer from '../footer/footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <MainPage/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
