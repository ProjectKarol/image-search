import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], att: [], id: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({
      images: response.data.results,
      att: response.data.results,
      id: response.data.id
    });
  };
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// Keys
// Access Key

// a6d8fba812dc40c18adc51fb13e0364727e490b52076fdacb2483a824dd4f3ec
// Secret key

// 9363585546212409623ac2e8203034f48bd580b51bfe3b83201c059b29cd99c1
// Note: both your Access Key and Secret Key must remain confidential.
