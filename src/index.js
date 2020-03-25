import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor() function is called the first thing, followed by super()
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  // helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div><h1>Error: {this.state.errorMessage}</h1></div>;
    };

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    };

    return <Spinner message='Please allow location request' />;
  };

  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    );
  };
};


ReactDOM.render(
  <App />, document.querySelector('#root')
);




// constructor() = One time setup
// render() = Only return JSX
// componentDidMount() = Initial data loading
// componentDidUpdate() = Data loading when state/props change
// componentWillUnmount() = Cleanup (especially for non-React stuff)
