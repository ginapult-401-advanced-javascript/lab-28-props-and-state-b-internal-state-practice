import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gina',
      count: 0,
    };
  }

  handleNameChange = (input) => {
    this.setState(previousState => {
      return {
        
      }
    })
  }

   render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
          <Form />
        </div>
      </React.Fragment>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gina',
    };
  }

  handleChange = event => {
    this.state.setState({
      name:event.target.value,
    })
  }

  render() {
    return(
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
