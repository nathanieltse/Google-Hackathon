import TopNav from './components/TopNav/TopNav';
import LeftNav from './components/LeftNav/LeftNav';
import RightNav from './components/RightNav/RightNav';
import MainContentPage from './pages/MainContentPage/MainContentPage';
import NotificationPage from './pages/NotificationPage/NotificationPage';
import './App.scss';
import { Component } from 'react';

class App extends Component {
  state={
    page: "main",
  }

  clickHandle = (id) => {
    if (id === 1) {
      return this.setState({page:"main"})
    } else {
      return this.setState({page:"notmain"})
    }

  }

  render(){
    return (
      <div className="App">
        <TopNav/>
        <section className="App__body">
          <LeftNav state={this.state.page} clickHandle={this.clickHandle}/>
          {this.state.page === "main" ?
          <MainContentPage />
          :
          <NotificationPage/>}
          <RightNav/>
        </section>
      </div>
    );
  }
  
}

export default App;
