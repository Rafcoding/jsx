import React from 'react';
import SearchBar from './SearchBar';
// functional component const App = () => {

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmitOrSimilarNameWeWant={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;
