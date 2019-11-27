import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}
