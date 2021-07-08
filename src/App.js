import TopNav from './components/TopNav/TopNav';
import LeftNav from './components/LeftNav/LeftNav';
import RightNav from './components/RightNav/RightNav';
import MainContentPage from './pages/MainContentPage/MainContentPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <section className="App__body">
        <LeftNav/>
        <MainContentPage />
        <RightNav/>
      </section>
    </div>
  );
}

export default App;
