import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}
