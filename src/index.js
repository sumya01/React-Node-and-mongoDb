import React from 'react';
import ReactDOM from 'react-dom';
import Lynda from './components/Lynda';
import Form from './components/Form';
import data from './components/testData';
import ContestPreview from './components/ContestPreview';

 console.log("-----",data);

class Game extends React.Component {
  state={
    pageHeader: 'Starting Page'
  };

  componentDidMount(){
    console.log("did mount");
  }
  componentWillUnmount(){
    console.log("will unmount");
    // debugger;
  }

  render() {
    return (
      <div className="game">
          <div>
              <Lynda headerName={this.state.pageHeader}/>
          </div>
          <div className="form">
              <Form />
          </div>
        <div>
          {this.props.contests.map(contest =>
            <ContestPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game contests={data.contest}/>,
  document.getElementById('root')
);

setTimeout(() => {
  console.log('qwerty');
  ReactDOM.render(
    <h2>...Unmounted the DOM</h2>,
    document.getElementById('root')
  );
},3000);
