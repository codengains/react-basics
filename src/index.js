import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// For files we write we have to provide specific file path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDcQzQ9V2rxaw5bT7tYNytzWNT96xQSMpw';

// Create a new component. this component should produce
// some HTML

//          Fat Arrow still function but ES6 version
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        // this.setState({videos: videos}); only works when key and property are the samme
      });
    }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo}  />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      );
    }
  }

// Take this component's generated HTML and put it
//on the page (in the DOM)

 ReactDOM.render(<App />, document.querySelector('.container'));
