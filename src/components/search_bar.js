// always import react to files that are written with JSX
import React, {Component} from 'react';
// import React, {Component} from 'react'; ------is equal to------ const Component = React.Component;
// ES6 written like this to remove React.Component from the class

//  plane JavaScript function info goes in JSX comes out and rendered into the DOM.
//  Functional component
// const SearchBar = () => {
//   return <input /> // React.createElement
// }

// Class components used to add extra Functionality able to communicate with other components.
// Class Component
class SearchBar extends Component {
    // initializing state for class based components only
    constructor(props) {
      super(props);

      this.state = { term: '' };
    }

  // Always define a render method for classes
  render () {
      // and must retun some JSX
    return (
      //event Handler.
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}
// Event Handler method
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }

export default SearchBar;
