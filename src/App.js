import React from 'react';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import { game, result, start } from './utils/contants';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: start,
      myName: 'noName'
    }
  }
  changeName = (dataFromChild) => {  
    this.setState({myName: dataFromChild});
}

  changePage = page => {
    this.setState({ page });
  }



  render() {
    switch (this.state.page) {
      case game:
        return <Game changePage={this.changePage} myName = {this.state.myName}/>;
      case result:
        return <Result changePage={this.changePage}/>
      default:
        return <Start changePage={this.changePage} myName={this.changeName}/>
    }
  }

}

export default App;
